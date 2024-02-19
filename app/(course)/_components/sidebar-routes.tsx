"use client";

import { SideBarItem } from "./sidebar-items";
import { usePathname } from "next/navigation";
import Icons from "@/components/icons";

const guestRoutes = [
  {
    name: "React Components Library App Landing Page",
    href: "/",
    icon: Icons.Pause,
    color: "#689DFF",
  },
  {
    name: "JavaScript",
    href: "",
    color: "#A1DAB9",
    icon: Icons.Play,
  },
  {
    name: "React",
    href: "",
    color: "#FFC102",
    icon: Icons.Play,
  },
  {
    name: "Node.js",
    href: "",
    color: "#3788D8",
    icon: Icons.Play,
  },
  {
    name: "Express",
    href: "",
    color: "#00AA45",
    icon: Icons.Play,
  },
  {
    name: "HTML / CSS",
    href: "/",
    icon: Icons.Play,
    color: "#689DFF",
  },
  {
    name: "JavaScript",
    href: "",
    color: "#A1DAB9",
    icon: Icons.Play,
  },
  {
    name: "React",
    href: "",
    color: "#FFC102",
    icon: Icons.Play,
  },
  {
    name: "Node.js",
    href: "",
    color: "#3788D8",
    icon: Icons.Play,
  },
  {
    name: "Express",
    href: "",
    color: "#00AA45",
    icon: Icons.Play,
  },
  {
    name: "HTML / CSS",
    href: "/",
    icon: Icons.Play,
    color: "#689DFF",
  },
  {
    name: "JavaScript",
    href: "",
    color: "#A1DAB9",
    icon: Icons.Play,
  },
  {
    name: "React",
    href: "",
    color: "#FFC102",
    icon: Icons.Play,
  },
  {
    name: "Node.js",
    href: "",
    color: "#3788D8",
    icon: Icons.Play,
  },
  {
    name: "Express",
    href: "",
    color: "#00AA45",
    icon: Icons.Play,
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
