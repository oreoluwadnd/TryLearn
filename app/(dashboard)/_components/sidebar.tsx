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
      <div className="mt-auto p-4">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to all resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Sidebar;
