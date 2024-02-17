"use client";
import React from "react";
import { MobileSidebar } from "./mobile-sidebar";
import NavbarRoutes from "@/components/navbar-routes";

export function Navbar() {
  return (
    <div className="h-full p-3 flex items-center border-b shadow-sm bg-white">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
}
