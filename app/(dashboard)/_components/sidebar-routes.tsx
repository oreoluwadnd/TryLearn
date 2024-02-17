"use client";

import { SideBarItem } from "./sidebar-items";
import { usePathname } from "next/navigation";
import Icons from "@/components/icons";

const guestRoutes = [
  {
    name: "Home",
    href: "/dashboard/home",
    icon: Icons.Home,
    color: "#689DFF",
  },
  {
    name: "Learning",
    href: "/dashboard/learning",
    color: "#A1DAB9",
    icon: Icons.Book,
  },
  {
    name: "Roadmap",
    href: "/dashboard/roadmap",
    color: "#FFC102",
    icon: Icons.Map,
  },
  {
    name: "Resume",
    href: "/dashboard/resume",
    color: "#3788D8",
    icon: Icons.Pencil,
  },
  {
    name: "Jobs",
    href: "/dashboard/jobs",
    color: "#00AA45",
    icon: Icons.BriefCase,
  },
];

const teacherRoutes = [
  {
    name: "Courses",
    href: "/teacher/courses",
    color: "#3788D8",
    icon: Icons.Home,
  },
];
export function SidebarRoutes() {
  const pathname = usePathname();
  const isTeacherMode = pathname?.startsWith("/teacher");

  const routes = isTeacherMode ? teacherRoutes : guestRoutes;
  return (
    <div className="flex p-3 flex-col space-y-1 w-full">
      {routes.map((route, index) => (
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
