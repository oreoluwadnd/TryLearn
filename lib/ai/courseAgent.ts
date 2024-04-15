import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { StateGraph, END } from "@langchain/langgraph";
import { RunnableLambda } from "@langchain/core/runnables";
import { TavilySearchAPIRetriever } from "@langchain/community/retrievers/tavily_search_api";

interface AgentState {
  topic: string;
  searchResults?: string;
  tutorial?: string;
  critique?: string;
}

function model() {
  return new ChatOpenAI({
    temperature: 0,
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY as string,
    modelName: "gpt-3.5-turbo",
  });
}

async function search(state: {
  agentState: AgentState;
}): Promise<{ agentState: AgentState }> {
  const retriever = new TavilySearchAPIRetriever({
    apiKey: process.env.NEXT_PUBLIC_TAVILY_API_KEY!,
    k: 10,
  });
  let topic = state.agentState.topic;
  // must be at least 5 characters long
  if (topic.length < 5) {
    topic = "topic: " + topic;
  }
  const docs = await retriever.getRelevantDocuments(topic);
  return {
    agentState: {
      ...state.agentState,
      searchResults: JSON.stringify(docs),
    },
  };
}

async function curate(state: {
  agentState: AgentState;
}): Promise<{ agentState: AgentState }> {
  const response = await model().invoke(
    [
      new SystemMessage(
        `You are a personal tutor editor. 
         Your sole task is to return a list of URLs of the 5 most relevant articles for the provided topic or query as a JSON list of strings
         in this format:
         {
          urls: ["url1", "url2", "url3", "url4", "url5" , "url6"]
         }
         .`.replace(/\s+/g, " ")
      ),
      new HumanMessage(
        `Today's date is ${new Date().toLocaleDateString("en-GB")}.
       Topic or Query: ${state.agentState.topic}
       
       Here is a list of articles:
       ${state.agentState.searchResults}`.replace(/\s+/g, " ")
      ),
    ],
    {
      response_format: {
        type: "json_object",
      },
    }
  );
  const urls = JSON.parse(response.content as string).urls;
  const searchResults = JSON.parse(state.agentState.searchResults!);
  const newSearchResults = searchResults.filter((result: any) => {
    return urls.includes(result.metadata.source);
  });
  return {
    agentState: {
      ...state.agentState,
      searchResults: JSON.stringify(newSearchResults),
    },
  };
}

async function critique(state: {
  agentState: AgentState;
}): Promise<{ agentState: AgentState }> {
  let feedbackInstructions = "";
  if (state.agentState.critique) {
    feedbackInstructions =
      `The writer has revised the tutorial based on your previous critique: ${state.agentState.critique}
       The writer might have left feedback for you encoded between <FEEDBACK> tags.
       The feedback is only for you to see and will be removed from the final tutorial.
    `.replace(/\s+/g, " ");
  }
  const response = await model().invoke([
    new SystemMessage(
      `You are a tutorial critique. Your sole purpose is to provide short feedback on a written 
      tutorial so the writer will know what to fix.       
      Today's date is ${new Date().toLocaleDateString("en-GB")}
      Your task is to provide a really short feedback on the tutorial only if necessary.
      if you think the tutorial is good, please return [DONE].
      you can provide feedback on the revised tutorial or just
      return [DONE] if you think the tutorial is good.
      Please return a string of your critique or [DONE].`.replace(/\s+/g, " ")
    ),
    new HumanMessage(
      `${feedbackInstructions}
       This is the tutorial: ${state.agentState.tutorial}`
    ),
  ]);
  const content = response.content as string;
  console.log("critique:", content);
  return {
    agentState: {
      ...state.agentState,
      critique: content.includes("[DONE]") ? undefined : content,
    },
  };
}

async function write(state: {
  agentState: AgentState;
}): Promise<{ agentState: AgentState }> {
  const response = await model().invoke([
    new SystemMessage(
      `You are a personal tutor write a comprehensive note and use put example maybe a code if it relating to programing language only or a samples if needed on the topic. Your sole purpose is to write a well-written tutorial about a 
      topic using a list of articles as guide and reference and be comprehensive as possible. Write your tutorial in markdown.`.replace(
        /\s+/g,
        " "
      )
    ),
    new HumanMessage(
      `Today's date is ${new Date().toLocaleDateString("en-GB")}.
      Your task is to write a critically acclaimed tutorial for me about the provided query or 
      topic based on the sources. 
      Here is a list of articles: ${state.agentState.searchResults}
      This is the topic: ${state.agentState.topic}
      Please return a well-written tutorial based on the provided information.`.replace(
        /\s+/g,
        " "
      )
    ),
  ]);
  const content = response.content as string;
  return {
    agentState: {
      ...state.agentState,
      tutorial: content,
    },
  };
}

async function revise(state: {
  agentState: AgentState;
}): Promise<{ agentState: AgentState }> {
  const response = await model().invoke([
    new SystemMessage(
      `You are a personal tutor. Your sole purpose is to edit a well-written tutorial about a 
      topic based on given critique.`.replace(/\s+/g, " ")
    ),
    new HumanMessage(
      `Your task is to edit the tutorial based on the critique given.
      This is the tutorial: ${state.agentState.tutorial}
      This is the critique: ${state.agentState.critique}
      Please return the edited tutorial based on the critique given.
      You may leave feedback about the critique encoded between <FEEDBACK> tags like this:
      <FEEDBACK> here goes the feedback ...</FEEDBACK>`.replace(/\s+/g, " ")
    ),
  ]);
  const content = response.content as string;
  return {
    agentState: {
      ...state.agentState,
      tutorial: content,
    },
  };
}

const agentState = {
  agentState: {
    value: (x: AgentState, y: AgentState) => y,
    default: () => ({
      topic: "",
    }),
  },
};

// Define the function that determines whether to continue or not
const shouldContinue = (state: { agentState: AgentState }) => {
  const result = state.agentState.critique === undefined ? "end" : "continue";
  return result;
};

const workflow = new StateGraph({
  channels: agentState,
});

workflow.addNode("search", new RunnableLambda({ func: search }) as any);
workflow.addNode("curate", new RunnableLambda({ func: curate }) as any);
workflow.addNode("write", new RunnableLambda({ func: write }) as any);
workflow.addNode("critique", new RunnableLambda({ func: critique }) as any);
workflow.addNode("revise", new RunnableLambda({ func: revise }) as any);

workflow.addEdge("search", "curate");
workflow.addEdge("curate", "write");
workflow.addEdge("write", "critique");

// We now add a conditional edge
workflow.addConditionalEdges(
  // First, we define the start node. We use `agent`.
  // This means these are the edges taken after the `agent` node is called.
  "critique",
  // Next, we pass in the function that will determine which node is called next.
  shouldContinue,
  // Finally we pass in a mapping.
  // The keys are strings, and the values are other nodes.
  // END is a special node marking that the graph should finish.
  // What will happen is we will call `should_continue`, and then the output of that
  // will be matched against the keys in this mapping.
  // Based on which one it matches, that node will then be called.
  {
    // If `tools`, then we call the tool node.
    continue: "revise",
    // Otherwise we finish.
    end: END,
  }
);

workflow.addEdge("revise", "critique");

workflow.setEntryPoint("search");
const app = workflow.compile();

export async function researchWithLangGraph(topic: string) {
  const inputs = {
    agentState: {
      topic,
    },
  };
  const result = await app.invoke(inputs);
  const regex = /<FEEDBACK>[\s\S]*?<\/FEEDBACK>/g;
  const tutorial = result.agentState.tutorial.replace(regex, "");
  return tutorial;
}
