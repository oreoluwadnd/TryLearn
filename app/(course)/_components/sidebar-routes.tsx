"use client";
import { SideBarItem } from "./sidebar-items";
import { useCoursesStore } from "@/store/course";

export function SidebarRoutes() {
  const course = useCoursesStore((state) => state);
  return (
    <div className="flex p-3 flex-col space-y-1 w-full">
      {course.chapters.map((route) => (
        <SideBarItem
          id={route.id!}
          key={route.id}
          name={route.chapter}
          href={`/course/${course.course}/chapter/${route.id}`}
        />
      ))}
    </div>
  );
}
