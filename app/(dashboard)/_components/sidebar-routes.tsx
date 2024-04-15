"use client";

import { SideBarItem } from "./sidebar-items";
import { usePathname } from "next/navigation";
import Icons from "@/components/icons";

const guestRoutes = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Icons.Home,
    color: "#689DFF",
  },
];

export function SidebarRoutes() {
  return (
    <div className="flex p-3 flex-col space-y-1 w-full">
      {guestRoutes.map((route, index) => (
        <SideBarItem
          key={index}
          color={route.color}
          name={route.name}
          href={route.href}
          icon={route.icon}
        />
      ))}
    </div>
  );
}
