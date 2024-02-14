import React from "react";
// import Sidebar from "./_components/sidebar";
// import { Navbar } from "./_components/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full  bg-black">
      <div className="md:pl-56 z-50 w-full h-[80px] fixed inset-y-0">
        {/* <Navbar /> */}
      </div>
      <div className="hidden md:flex z-50 h-full w-56 fixed inset-y-0">
        {/* <Sidebar /> */}
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
}
