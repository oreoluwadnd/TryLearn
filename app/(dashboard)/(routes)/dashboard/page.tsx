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
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { generateCoursesApi } from "@/actions/genearateCourse";

import { useCoursesStore } from "@/store/course";
import { useRouter } from "next/navigation";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type courseForm = {
  topic: string;
  tutor: string;
};
const tutor = [
  {
    name: "Emily",
    tone: "Friendly",
  },
  {
    name: "Raj",
    tone: "Professional",
  },
  {
    name: "Maria",
    tone: "Funny",
  },
  {
    name: "Liam",
    tone: "Strict",
  },
  {
    name: "Haruto",
    tone: "Funny",
  },
  {
    name: "Pedro",
    tone: "Playful",
  },
];

const formSchema = z.object({
  topic: z.string().min(1, {
    message: "Title is required",
  }),
  tutor: z.string().min(1, {
    message: "Tutor is required",
  }),
});

export default function CreatePage() {
  const { user: clerkUser } = useUser();
  const router = useRouter();
  const {
    actions,
    course,
    description,
    chapters,
    credit,
    user,
    tutor: TutorData,
  } = useCoursesStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      tutor: "",
    },
  });
  const generateCoursesMutation = useMutation({
    mutationFn: generateCoursesApi,
    onSuccess: (data) => {
      actions.deductCredit();
      actions.resetStore();
      actions.addEntry({
        chapters: data.chapters,
        course: data.course,
        description: data.description,
        duration: data.duration,
        image: data.image,
        tutor: data.tutor,
      });
      toast.success("Course generated successfully");
      router.push(`/dashboard/${encodeURIComponent(data.course)}`);
    },
    onError: (error) => {
      toast.error("Failed to generate course");
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
      actions.addUser(clerkUser?.emailAddresses[0].emailAddress!);
      actions.addCredit(3);
    }
    if (!credit) {
      toast.error("You have exceeded your credit limit. Please upgrade.");
      return;
    }

    generateCoursesMutation.mutate(values);
  }

  return (
    <div className="h-full overflow-hidden">
      <div className=" overflow-y-scroll bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full pb-6">
        <main className="grid items-start gap-4 p-4 pb-20  md:gap-8 md:pb-20 md:p-6">
          <div className="flex items-center gap-2">
            <Icons.BriefCase className="text-2xl" />

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
                            {tutor.map((tutor) => (
                              <SelectItem key={tutor.name} value={tutor.name}>
                                {tutor.name} - {tutor.tone}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="w-full md:col-span-2 justify-center">
                    <Button
                      disabled={generateCoursesMutation.isPending}
                      className="w-full md:w-fit"
                      type="submit"
                    >
                      {generateCoursesMutation.isPending
                        ? `${form.getValues("tutor")} is thinking...`
                        : "Generate"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <div className="flex items-center p-4 h-10">
                <h1 className="text-lg font-bold">
                  Recently Generated Courses
                </h1>
              </div>
              <div className="border-t" />
              <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {chapters.length > 0 && (
                  <Card className="flex gap-4 flex-col items-start p-0">
                    <CardHeader className="pb-0">
                      <CardTitle className="text-base font-bold">
                        {course}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {description}
                        {TutorData && ` - ${TutorData}`}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex-1 flex items-end">
                      <Button disabled={generateCoursesMutation.isPending}>
                        <Link href={`/dashboard/${encodeURIComponent(course)}`}>
                          View Course
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )}
                {!chapters.length && (
                  <div className="text-gray-500 dark:text-gray-400 text-center">
                    No courses generated yet
                  </div>
                )}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
