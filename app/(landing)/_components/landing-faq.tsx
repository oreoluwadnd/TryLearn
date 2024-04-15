import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeaturesProps {
  question: string;
  answer: string;
}

const features: FeaturesProps[] = [
  {
    question: "What is the purpose of this platform?",

    answer: `This platform aims to provide users with personalized learning experiences by leveraging AI technology to generate tailored courses and fetch relevant video content from YouTube. Our platform also generates high-quality notes to help users retain information more effectively`,
  },
  {
    question: `Can I access the platform from any device?`,

    answer: `Yes, our platform is fully responsive and can be accessed from any device, including desktops, laptops, tablets, and smartphones`,
  },
  {
    question: `Is the content on this platform curated?`,

    answer: `
      Yes, the content on our platform is curated from a wide range of sources to ensure that users receive high-quality and relevant information. Our platform also generates high-quality notes to help users retain information more effectively`,
  },
  {
    question: `How are the AI-generated notes created?`,

    answer: `Our AI Platform analyze course materials and generate concise summaries and key takeaways to help users review and retain important information.`,
  },
  {
    question: `What are the benefits of using this platform?`,

    answer: `Our platform offers a wide range of benefits, including personalized learning experiences, access to high-quality curated content, and the ability to generate comprehensive notes to help users retain information more effectively`,
  },
  {
    question: `Are there age restrictions for accessing certain content on the platform?`,

    answer: `Yes, some content on our platform may be restricted based on age. Users under the age of 18 may require parental consent to access certain content`,
  },
  {
    question: `How can I provide feedback or report an issue on the platform?`,

    answer: `If you have any feedback or encounter any issues while using our platform, please reach out to our support team at awuloero13@gmail.com`,
  },
];
export default function Faqs() {
  return (
    <section className="w-full py-10 md:py-24 lg:py-10 xl:py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-8 text-center">
          <div className="w-full max-w-full border rounded-3xl p-2  md:p-10 space-y-4 mx-auto">
            <div className="space-y-2 mb-10 mt-5">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none bg-clip-text">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[600px]  md:text-lg mx-auto">
                Here are some of the most frequently asked questions about our
                platform. If you have any other questions, feel free to reach
                out to us.
              </p>
            </div>
            <Accordion type="single" collapsible className="">
              {features.map((faq, index) => (
                <AccordionItem key={index} value={index.toString()}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="justify-start text-left">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
