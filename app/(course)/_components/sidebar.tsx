import React from "react";
import { SidebarRoutes } from "./sidebar-routes";
import Icons from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

function ChaptersSidebar() {
  return (
    <div className="h-full w-full flex py-3 flex-col  shadow-sm bg-white ">
      <Link
        href={"/dashboard/learning"}
        className="flex items-center h-20  pl-7 text-black"
      >
        <Icons.Chart className="h-6 w-6" />
        <h1 className="ml-2 text-lg font-semibold">CareerHub</h1>
      </Link>
      <div className="flex overflow-y-auto overflow-x-hidden flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default ChaptersSidebar;
