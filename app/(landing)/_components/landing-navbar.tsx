import { Button } from "@/components/ui/button";
import { PenToolIcon, Rabbit } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full sticky  inset-x-0 top-0 z-30 bg-white">
      <div className=" container flex justify-between py-4 border shadow-sm">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#E63E21]">Try</h1>
          <h1 className="text-2xl font-bold">Learn</h1>
        </div>
        <div>
          <Button>Log In</Button>
        </div>
      </div>
    </nav>
  );
}