"use client";
import Link from "next/link";
import Icons from "@/components/icons";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useCoursesStore } from "@/store/course";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { enrollCourseApi } from "@/actions/enrollActions";
import { toast } from "sonner";
import Loader from "@/components/loader";

export default function CourseDetails() {
  const router = useRouter();
  const course = useCoursesStore((state) => state);
  const { actions } = useCoursesStore();
  const enrollCoursesMutation = useMutation({
    mutationFn: enrollCourseApi,
    onSuccess: (data) => {
      toast.success("Enrolled successfully");
      actions.deductCredit();
      actions.addEntry({
        chapters: data.chapters,
        course: data.course,
        description: data.description,
        duration: data.duration,
        tutor: data.tutor,
        image: data.image,
      });
      router.push(
        `/course/${encodeURIComponent(data.course)}/chapter/${
          data?.chapters[0]?.id
        }`
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleEnroll = () => {
    //check videos already exit in the courses if exit go to chapter page if doesnt send request
    if (course.chapters[0].videoId) {
      router.push(
        `/course/${encodeURIComponent(course.course)}/chapter/${
          course.chapters[0].id
        }`
      );
      return;
    }
    if (course.credit === 0) {
      toast.error("You have no credit to enroll in this course");
      return;
    }

    enrollCoursesMutation.mutate(course);
  };

  return (
    <div className="h-full overflow-hidden pb-11">
      <div className=" overflow-y-scroll bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full ">
        {course.course.length === 0 ? (
          <Loader />
        ) : (
          <main className="grid items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center gap-2">
              <Link href="/dashboard/">
                <Icons.ChevronBack className="text-2xl" />
              </Link>
              <h1 className="font-semibold text-2xl text-nowrap">
                Course Details
              </h1>
            </div>
            <div className="grid gap-4 bg-white p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <AspectRatio
                  ratio={2 / 1}
                  className="bg-muted"
                  suppressHydrationWarning={true}
                >
                  <Image
                    src={course.image}
                    alt={`${course.course} course image`}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <div className="space-y-2 h-full">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {course.course}
                  </h1>

                  <p>{course.description}</p>
                  <div className="gap-1 flex">
                    <Badge color="primary">Estimated : {course.duration}</Badge>
                    {course.tutor && (
                      <Badge color="primary">{course.tutor}</Badge>
                    )}
                  </div>
                  <div className="mt-auto pt-5">
                    <Button
                      className="whitespace-nowrap   justify-center flex w-full md:w-fit h-10 items-center rounded-lg border  border-gray-200 bg-gray-950 px-8  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-950/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                      onClick={handleEnroll}
                    >
                      {enrollCoursesMutation.isPending
                        ? "Enrolling..."
                        : "Enroll"}
                    </Button>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center mt-4 text-black">
                <Icons.Database className="h-6 w-6 " />
                <h1 className="ml-2 text-lg font-semibold">Course content</h1>
              </div>
              {course.chapters.map((chapter) => (
                <Accordion
                  key={chapter.description}
                  type="single"
                  collapsible
                  className="w-full"
                  suppressHydrationWarning={true}
                >
                  <AccordionItem value={chapter.chapter}>
                    <AccordionTrigger>{chapter.chapter}</AccordionTrigger>
                    <AccordionContent>{chapter.description}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
