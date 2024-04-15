"use client";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stars } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { summaryAgent } from "@/actions/summaryAgent";
import { toast } from "sonner";
import { Chapter, useCoursesStore } from "@/store/course";
import { Sumana } from "next/font/google";
import Editor from "./editor";

export type summaryData = {
  markdown: string;
};

export function CourseTab({ chapter }: { chapter?: Chapter }) {
  const { actions, credit } = useCoursesStore((state) => state);

  const summaryGeneration = useMutation({
    mutationFn: summaryAgent,
    onSuccess: (data) => {
      actions.deductCredit();
      if (chapter) {
        toast.success("Summary generated successfully");
        actions.addSummary({ ...chapter, summary: data });
      }
    },
    onError: (error) => {
      toast.error("Failed to generate summary");
    },
  });

  const handleSummarize = async () => {
    if (!chapter?.query) {
      return;
    }
    if (credit === 0) {
      toast.error("You have no credit to generate a summary");
      return;
    }

    summaryGeneration.mutate(chapter?.query);
  };

  return (
    <Tabs
      suppressHydrationWarning={true}
      defaultValue="resources"
      className="w-full overflow-x-hidden"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="resources">Summary</TabsTrigger>

        <TabsTrigger value="note">Note</TabsTrigger>
      </TabsList>
      <TabsContent value="resources">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center my-3 justify-between">
                <h2>Summary</h2>
                <Button
                  className="flex gap-2 items-center"
                  disabled={
                    summaryGeneration.isPending || Boolean(chapter?.summary)
                  }
                  onClick={() => handleSummarize()}
                >
                  <Stars />
                  <p>Summarize</p>
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Dont have like watching a video? Click the button to generate a
              note
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-3 grid grid-cols-1 md:grid-cols-3">
            {chapter?.summary && (
              <Markdown className="prose" remarkPlugins={[remarkGfm]}>
                {chapter?.summary!}
              </Markdown>
            )}
            {summaryGeneration.isPending && (
              <div className="w-full flex justify-center h-52 items-center">
                <Stars className="animate-spin  text-blue-600" size={100} />
              </div>
            )}
            {!summaryGeneration.isPending && !chapter?.summary && (
              <div className="w-full text-center flex justify-center h-52 items-center">
                <p>
                  No summary available. <br />
                  Click the button to generate a summary
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="note">
        <Card>
          <CardHeader>
            <CardTitle>Note</CardTitle>
            <CardDescription>Take lecture notes as you learn</CardDescription>
          </CardHeader>
          <CardContent className="h-96 w-full">
            <Editor />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
