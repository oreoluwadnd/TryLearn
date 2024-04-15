import React from "react";
import { SidebarRoutes } from "./sidebar-routes";
import Icons from "@/components/icons";
import Link from "next/link";

function ChaptersSidebar() {
  return (
    <div className="h-full w-full flex py-3 flex-col  shadow-sm bg-white ">
      <div className="flex items-center h-20  pl-7 text-black">
        <span className="text-2xl">🔥</span>
        <Link href={"/dashboard"} className="flex items-center">
          <h1 className="text-2xl font-bold text-[#E63E21]">Try</h1>
          <h1 className="text-2xl font-bold">Learn</h1>
        </Link>
      </div>
      <div className="flex overflow-y-auto overflow-x-hidden flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default ChaptersSidebar;
