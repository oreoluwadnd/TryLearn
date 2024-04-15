"use client";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import VideoPlayer from "./_components/video-player";
import { CourseTab } from "./_components/course-tab";
import { useCoursesStore } from "@/store/course";
import Loader from "@/components/loader";

export default function ChapterDetails({
  params,
}: {
  params: {
    courseId: string;
    chapterId: string;
  };
}) {
  const [isMounted, setIsMounted] = useState(false);
  const course = useCoursesStore((state) => state);
  const chapter = course.chapters.find((c) => c.id === params.chapterId);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loader />;
  }
  return (
    <div className="h-full overflow-hidden ">
      <div className=" overflow-y-scroll pb-16 bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full ">
        <main className="grid h-fit items-start gap-4 p-4 md:gap-8 md:p-6">
          <h1 className="font-semibold text-2xl">{chapter?.chapter}</h1>
          <div className="grid gap-4 h-full bg-white md:p-4 rounded-lg">
            <VideoPlayer
              url={`https://www.youtube.com/watch?v=${chapter?.videoId}`}
            />
            <h2 className="font-medium">{chapter?.videoTitle}</h2>
            <Separator />
            <p>{chapter?.description}</p>
            <Separator />
            <CourseTab chapter={chapter} />
          </div>
        </main>
      </div>
    </div>
  );
}
