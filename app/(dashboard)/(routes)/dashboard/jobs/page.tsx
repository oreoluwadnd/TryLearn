"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package2Icon, UsersIcon } from "lucide-react";

export default function CreatePage() {
  return (
    <div className=" overflow-hidden">
      <div className=" overflow-y-scroll bg-[#FAFBFB] mx-auto flex-col gap-3 flex  h-full pb-24">
        <main className="grid items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Job Insights
                </CardTitle>
                <Package2Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Open Positions Insights
                </CardTitle>
                <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <div className="flex items-center p-4 h-10">
                <h1 className="text-lg font-bold">Top Jobs</h1>
              </div>
              <div className="border-t" />
              <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card className="flex flex-col items-start p-0">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-base font-bold">
                      Senior Frontend Engineer
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Acme Inc is looking for a passionate and experienced
                      frontend engineer to join our team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <Button size="sm">View Details</Button>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-start p-0">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-base font-bold">
                      Marketing Manager
                    </CardTitle>
                    <CardDescription className="text-sm">
                      We&apos;re seeking a creative and data-driven marketing
                      manager to lead our marketing efforts.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <Button size="sm">View Details</Button>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-start p-0">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-base font-bold">
                      Product Designer
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Join our team and help us create beautiful and intuitive
                      user experiences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <Button size="sm">View Details</Button>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-start p-0">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-base font-bold">
                      Data Scientist
                    </CardTitle>
                    <CardDescription className="text-sm">
                      We&apos;re looking for a talented data scientist to unlock
                      insights from our data.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <Button size="sm">View Details</Button>
                  </CardContent>
                </Card>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
