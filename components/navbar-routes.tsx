"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { BadgeDollarSignIcon, LogOutIcon } from "lucide-react";
import { useCoursesStore } from "@/store/course";
import { UserButton } from "@clerk/nextjs";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const isCourse = pathname.includes("course");
  const course = useCoursesStore((state) => state);

  return (
    <>
      <div className="flex  ml-auto gap-x-2">
        <div className="flex space-x-3">
          {isCourse && (
            <Link href={`/dashboard/${encodeURIComponent(course.course)}`}>
              <Button>
                <LogOutIcon size={16} />
                Exit
              </Button>
            </Link>
          )}
          <div className="flex items-center text-xl gap-1">
            <BadgeDollarSignIcon className="text-yellow-700" />
            {course.credit} / 2
          </div>
          {!isCourse && <UserButton afterSignOutUrl="/" />}
        </div>
      </div>
    </>
  );
};
export default NavbarRoutes;
