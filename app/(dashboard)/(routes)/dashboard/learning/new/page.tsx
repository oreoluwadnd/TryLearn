"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clsx } from "clsx";
import Icons from "@/components/icons";

const formSchema = z.object({
  topic: z.string().min(1, {
    message: "Title is required",
  }),
  level: z.string().min(1, {
    message: "Description is required",
  }),
  duration: z.string().min(1, {
    message: "Duration is required",
  }),
  tutor: z.string().min(1, {
    message: "Mode is required",
  }),
});

export default function CreatePage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      level: "",
      duration: "",
      tutor: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      </pre>
    );
  }

  return (
    <div className="h-full overflow-hidden">
      <div className=" overflow-y-scroll bg-[#FAFBFB]  mx-auto flex-col gap-3 flex  h-full pb-6">
        <main className="grid items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/learning">
              <Icons.ChevronBack className="text-2xl" />
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
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration (in months)</FormLabel>
                        <FormControl>
                          <Input placeholder="2 months" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tutor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mode</FormLabel>
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
                  <div className="w-full mt-3 justify-center">
                    <Button className="w-full" type="submit">
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
