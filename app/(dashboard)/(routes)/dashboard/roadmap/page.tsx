"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  CodeIcon,
  DatabaseIcon,
  Package2Icon,
  SwitchCamera,
  UsersIcon,
} from "lucide-react";

export default function CreatePage() {
  return (
    <div className="overflow-hidden">
      <div className=" overflow-y-scroll bg-[#FAFBFB] mx-auto flex-col gap-3 flex  h-full pb-24">
        <main className="grid items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-2xl md:text-3xl">My Roadmap</h1>
            <Button className="ml-auto" size="sm">
              Personalize
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex flex-row items-center space-y-0">
                  <CodeIcon className="h-6 w-6" />
                  <CardTitle className="ml-2">Frontend Developer</CardTitle>
                </div>
                <Switch />
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <p className="font-medium">Description</p>
                  <p>
                    Learn the skills required to build user interfaces and
                    interactive web applications using HTML, CSS, and
                    JavaScript.
                  </p>
                  <p className="font-medium">Prerequisites</p>
                  <ul className="list-disc ml-4">
                    <li>Basic understanding of HTML and CSS</li>
                    <li>Experience with JavaScript programming</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex flex-row items-center space-y-0">
                  <DatabaseIcon className="h-6 w-6" />
                  <CardTitle className="ml-2">Database Administrator</CardTitle>
                </div>
                <Switch />
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <p className="font-medium">Description</p>
                  <p>
                    Learn the skills required to design, implement, and maintain
                    databases, including data modeling, normalization, and
                    querying using SQL.
                  </p>
                  <p className="font-medium">Prerequisites</p>
                  <ul className="list-disc ml-4">
                    <li>Understanding of database concepts</li>
                    <li>Experience with SQL</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
