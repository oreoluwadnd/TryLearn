"use client";
import { Separator } from "@/components/ui/separator";
import VideoPlayer from "./_components/video-player";
import { CourseTab } from "./_components/course-tab";

export default function chapterDetails() {
  return (
    <div className="h-full overflow-hidden pb-11">
      <div className=" overflow-y-scroll bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full ">
        <main className="grid h-fit items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 bg-white md:p-4 rounded-lg">
            <VideoPlayer url={"https://www.youtube.com/watch?v=jNgP6d9HraI"} />
            <Separator />
            <CourseTab />
          </div>
        </main>
      </div>
    </div>
  );
}
