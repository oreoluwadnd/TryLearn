"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetOverlay,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import Icons from "@/components/icons";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger className="md:hidden hover:opacity-75 transition">
        <Icons.Menu
          onClick={() => {
            setIsOpen(true);
          }}
          className="w-7 h-7 text-black "
        />
      </SheetTrigger>
      <SheetOverlay
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
