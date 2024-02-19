"use client";
import React from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
// import { handleCarrerSubmit } from "@/actions/getSkills";

interface skillCardData {
  name: string;
  note: string;
}

// export const carrerformSchema = z.object({
//   title: z.string().min(1, {
//     message: "Title is required",
//   }),
// });

export default function CreatePage() {
  const [blog, setBlog] = React.useState<any>([]);
  const router = useRouter();
  // const form = useForm<z.infer<typeof carrerformSchema>>({
  //   resolver: zodResolver(carrerformSchema),
  //   defaultValues: {
  //     title: "",
  //   },
  // });
  console.log("🚀 ~ handleSubmit ~ values:");

  // const { isSubmitting, isValid } = form.formState;

  //ADD MUTATION THAT RECEIVES THE FORM DATA

  // const mutation = useMutation({
  //   mutationFn: handleCarrerSubmit,
  //   onSuccess: (data, variables, context) => {
  //     console.log("🚀 ~ onSuccess ~ data", data);
  //     toast.success("Skills Ready! 🎉", {
  //       icon: <SparklesIcon />,
  //       description: "Your skills are ready to be used!",
  //     });
  //   },
  //   onError: (error, variables, context) => {
  //     console.log("🚀 ~ onError ~ error", error);
  //     toast.error("Error", {
  //       description: "There was an error creating your course.",
  //     });
  //   },
  // });

  //   const handleSubmit = async (values: z.infer<typeof carrerformSchema>) => {
  //     // mutation.mutate(values);
  //     // const data = await handleBlogSubmit(values);
  // console.log("🚀 ~ handleSubmit ~ values", values);
  //     // setBlog(data);
  //   };
  // console.log("🚀 ~ handleSubmit ~ mutation", mutation);

  return (
    <div className="h-full overflow-hidden">
      <div className=" overflow-y-scroll bg-[#FAFBFB] mx-auto flex-col gap-3 flex  h-full pb-24">
        <main className="grid items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex justify-between items-center gap-2">
            <h1 className="font-semibold text-2xl">Courses</h1>
            <Link
              className="ml-auto whitespace-nowrap mt-auto justify-center flex w-fit md:w-fit h-10 items-center rounded-lg border  border-gray-200 bg-[#F1FAFF] px-8  text-sm font-medium text-black shadow transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F1FAFF]"
              href="/dashboard/learning/new"
            >
              New Course
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row items-start gap-4 border p-3 rounded-md bg-white">
              <div className="flex items-start gap-4">
                <div className="rounded-lg hidden md:flex overflow-hidden aspect-square border border-gray-200 ">
                  <Image
                    alt="Course thumbnail"
                    className="object-cover object-center"
                    height="120"
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e3/b971b05cfe11e89d97d1bd932bfd30/algs4partI-logo.png"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h2 className="font-semibold text-base">
                    Introduction to Computer Science
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn the basics of programming and computer science.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-full rounded-lg border border-gray-200">
                      <Progress value={25} className="h-full rounded-lg " />
                    </div>
                    <span className="text-xs shrink-0">25%</span>
                  </div>
                </div>
              </div>
              <Link
                className="ml-auto whitespace-nowrap mt-auto justify-center flex w-full md:w-fit h-10 items-center rounded-lg border  border-gray-200 bg-gray-950 px-8  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-950/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                href="/dashboard/learning/1"
              >
                Enroll
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row items-start gap-4 border p-3 rounded-md bg-white">
              <div className="flex items-start gap-4">
                <div className="rounded-lg hidden md:flex overflow-hidden aspect-square border border-gray-200 ">
                  <Image
                    alt="Course thumbnail"
                    className="object-cover object-center"
                    height="120"
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e3/b971b05cfe11e89d97d1bd932bfd30/algs4partI-logo.png"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h2 className="font-semibold text-base">
                    Introduction to Computer Science
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn the basics of programming and computer science.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-full rounded-lg border border-gray-200">
                      <Progress value={25} className="h-full rounded-lg " />
                    </div>
                    <span className="text-xs shrink-0">25%</span>
                  </div>
                </div>
              </div>
              <Link
                className="ml-auto whitespace-nowrap mt-auto justify-center flex w-full md:w-fit h-10 items-center rounded-lg border  border-gray-200 bg-gray-950 px-8  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-950/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                href="/dashboard/learning/1"
              >
                Enroll
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row items-start gap-4 border p-3 rounded-md bg-white">
              <div className="flex items-start gap-4">
                <div className="rounded-lg hidden md:flex overflow-hidden aspect-square border border-gray-200 ">
                  <Image
                    alt="Course thumbnail"
                    className="object-cover object-center"
                    height="120"
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e3/b971b05cfe11e89d97d1bd932bfd30/algs4partI-logo.png"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h2 className="font-semibold text-base">
                    Introduction to Computer Science
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn the basics of programming and computer science.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-full rounded-lg border border-gray-200">
                      <Progress value={25} className="h-full rounded-lg " />
                    </div>
                    <span className="text-xs shrink-0">25%</span>
                  </div>
                </div>
              </div>
              <Link
                className="ml-auto whitespace-nowrap mt-auto justify-center flex w-full md:w-fit h-10 items-center rounded-lg border  border-gray-200 bg-gray-950 px-8  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-950/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                href="#"
              >
                Enroll
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row items-start gap-4 border p-3 rounded-md bg-white">
              <div className="flex items-start gap-4">
                <div className="rounded-lg hidden md:flex overflow-hidden aspect-square border border-gray-200 ">
                  <Image
                    alt="Course thumbnail"
                    className="object-cover object-center"
                    height="120"
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e3/b971b05cfe11e89d97d1bd932bfd30/algs4partI-logo.png"
                    style={{
                      aspectRatio: "120/120",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h2 className="font-semibold text-base">
                    Introduction to Computer Science
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn the basics of programming and computer science.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-full rounded-lg border border-gray-200">
                      <Progress value={25} className="h-full rounded-lg " />
                    </div>
                    <span className="text-xs shrink-0">25%</span>
                  </div>
                </div>
              </div>
              <Link
                className="ml-auto whitespace-nowrap mt-auto justify-center flex w-full md:w-fit h-10 items-center rounded-lg border  border-gray-200 bg-gray-950 px-8  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-950/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                href="#"
              >
                Enroll
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
