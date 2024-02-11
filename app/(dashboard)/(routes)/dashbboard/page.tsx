"use client";
import React from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";
import { SparklesIcon } from "lucide-react";
// import { handleCarrerSubmit } from "@/actions/getSkills";
import { SkillsCard } from "./_components/skills";
import { get } from "http";
// import { handleBlogSubmit } from "@/actions/getBlogs";
import { BlogCard } from "./_components/blogs";

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
    <div className="max-w-5xl mx-auto flex-col gap-3 flex md:items-center md:justify-center h-full p-6">
      <div className="gap-4 flex flex-col">
        <h1 className="text-2xl">SuperCharge your career</h1>
        <p>Advance your career with personalized learning paths.</p>
        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Career Path</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g Software Engineer, Data Scientist, etc."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Identify the skills you need to advance your career.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form> */}

        {/* {mutation.data &&
          mutation.data.map((item: skillCardData, index: number) => (
            <SkillsCard key={index} item={item} />
          ))} */}

        {blog &&
          blog?.map((item: any, index: number) => (
            <BlogCard key={index} item={item} />
          ))}
      </div>
    </div>
  );
}
