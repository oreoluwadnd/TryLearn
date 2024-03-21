"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icons from "@/components/icons";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { generateCoursesApi } from "@/actions/genearateCourse";

import { useCoursesStore } from "@/store/course";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";

export type courseForm = {
  topic: string;
  level: string;
  tutor: string;
};

const formSchema = z.object({
  topic: z.string().min(1, {
    message: "Title is required",
  }),
  level: z.string().min(1, {
    message: "Description is required",
  }),
  tutor: z.string().min(1, {
    message: "Tutor is required",
  }),
});

export default function CreatePage() {
  const router = useRouter();
  const { actions } = useCoursesStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      level: "",
      tutor: "",
    },
  });
  const generateCoursesMutation = useMutation({
    mutationFn: generateCoursesApi,
    onSuccess: (data) => {
      actions.addEntry({
        chapters: data.chapters,
        course: data.course,
        description: data.description,
        duration: data.duration,
        image: data.image,
      });
      router.push(`/dashboard/${encodeURIComponent(data.course)}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    generateCoursesMutation.mutate(values);
    // actions.addEntry({
    //   chapters: [],
    //   course: "",
    //   description: "",
    //   duration: "",
    //   image: "",
    // });
  }

  return (
    <div className="h-full overflow-hidden">
      <div className=" overflow-y-scroll bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full pb-6">
        <main className="grid items-start gap-4 p-4 pb-20  md:gap-8 md:pb-20 md:p-6">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/learning">
              <Icons.BriefCase className="text-2xl" />
            </Link>
            <h1 className="font-semibold text-2xl text-nowrap">
              AI Course Generation
            </h1>
          </div>
          <div className="grid gap-4 bg-white p-4 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">
              Enter your preferences below to generate personalized AI courses
            </p>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6"
                >
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Topic</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Data Analysis, Content Creation, etc."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Level</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">
                              Intermediate
                            </SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tutor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tutor</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Tutor" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Emily">Emily</SelectItem>
                            <SelectItem value="Raj">Raj</SelectItem>
                            <SelectItem value="Maria">Maria</SelectItem>
                            <SelectItem value="Liam">Liam</SelectItem>
                            <SelectItem value="Haruto">Haruto</SelectItem>
                            <SelectItem value="Pedro">Pedro</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="w-full md:col-span-2 justify-center">
                    <Button className="w-full md:w-fit" type="submit">
                      {generateCoursesMutation.isPending
                        ? "Loading..."
                        : "Generate"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4">
            <Card>
              <div className="flex items-center p-4 h-10">
                <h1 className="text-lg font-bold">Top Generated Courses</h1>
              </div>
              <div className="border-t" />
              <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card className="flex flex-col items-start p-0">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-base font-bold">
                      React Js
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Learn React from scratch with our AI generated course for
                      beginners to advanced.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-1 flex items-end">
                    <Button size="sm">
                      {generateCoursesMutation.isPending
                        ? "Loading..."
                        : "Generate"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </Card>
          </div> */}
        </main>
      </div>
    </div>
  );
}
