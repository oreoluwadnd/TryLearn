import React from "react";
import { SidebarRoutes } from "./sidebar-routes";
import Icons from "@/components/icons";

function Sidebar() {
  return (
    <div className="h-full w-full  flex flex-col overflow-y-auto shadow-sm bg-white ">
      <div className="flex items-center h-20  pl-7 text-black">
        <Icons.Chart className="h-6 w-6 " />
        <h1 className="ml-2 text-lg font-semibold">CareerHub</h1>
      </div>
      <div className="flex flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default Sidebar;
