"use client";
import { Separator } from "@/components/ui/separator";
import VideoPlayer from "./_components/video-player";
import { CourseTab } from "./_components/course-tab";
import { useCoursesStore } from "@/store/course";

export default function ChapterDetails({
  params,
}: {
  params: {
    courseId: string;
    chapterId: string;
  };
}) {
  const course = useCoursesStore((state) => state);
  const chapter = course.chapters.find((c) => c.id === params.chapterId);

  return (
    <div className="h-full overflow-hidden ">
      <div className=" overflow-y-scroll pb-16 bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full ">
        <main className="grid h-fit items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 h-full bg-white md:p-4 rounded-lg">
            <VideoPlayer
              url={`https://www.youtube.com/watch?v=${chapter?.video}`}
            />
            <Separator />
            <CourseTab />
          </div>
        </main>
      </div>
    </div>
  );
}
