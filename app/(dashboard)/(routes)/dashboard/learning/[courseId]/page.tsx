import * as z from "zod";
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

export default function CourseDetails() {
  return (
    <div className="h-full overflow-hidden pb-11">
      <div className=" overflow-y-scroll bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full ">
        <main className="grid items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/learning">
              <Icons.ChevronBack className="text-2xl" />
            </Link>
            <h1 className="font-semibold text-2xl text-nowrap">
              Course Details
            </h1>
          </div>
          <div className="grid gap-4 bg-white p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <AspectRatio ratio={2 / 1} className="bg-muted">
                <Image
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e3/b971b05cfe11e89d97d1bd932bfd30/algs4partI-logo.png"
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="space-y-2 h-full">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Introduction to Computer Science
                </h1>

                <p>Learn the basics of programming and computer science.</p>
                <div className="gap-1 flex">
                  <Badge color="primary">Beginner</Badge>
                  <Badge color="primary">5 Weeks</Badge>
                </div>
                <div className="mt-auto pt-5">
                  <Link
                    className="whitespace-nowrap   justify-center flex w-full md:w-fit h-10 items-center rounded-lg border  border-gray-200 bg-gray-950 px-8  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-950/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                    href="/dashboard/learning/1"
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex items-center mt-4 text-black">
              <Icons.Database className="h-6 w-6 " />
              <h1 className="ml-2 text-lg font-semibold">Course content</h1>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>1. React Basics</AccordionTrigger>
                <AccordionContent>
                  Generating a project with Create React App
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  2. React State and Lifecycle
                </AccordionTrigger>
                <AccordionContent>
                  Understanding state and lifecycle methods
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3. React Hook</AccordionTrigger>
                <AccordionContent>
                  Learning about hooks and how to use them
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger>4. React Context and Redux</AccordionTrigger>
                <AccordionContent>
                  Managing state with Context and Redux
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  5. React Router and Navigation
                </AccordionTrigger>
                <AccordionContent>
                  Understanding how to navigate between pages
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  6. React Testing and Debugging
                </AccordionTrigger>
                <AccordionContent>
                  Writing tests and debugging your application
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>
      </div>
    </div>
  );
}
