import React from "react";
import { Navbar } from "../../_components/navbar";
import ChaptersSidebar from "../../_components/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full max-w-7xl overflow-y-hidden mx-auto bg-white">
      <div className="md:pl-64 z-50 w-full h-20 inset-y-0">
        <Navbar />
      </div>
      <div className="hidden md:flex z-50 h-full w-64 fixed inset-y-0">
        <ChaptersSidebar />
      </div>
      <main className="md:pl-64  overflow-scroll w-full h-full">
        {children}
      </main>
    </div>
  );
}
