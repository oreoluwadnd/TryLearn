"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { UserButton } from "@clerk/nextjs";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isTeacherMode = pathname.startsWith("/teacher");
  const isPlayerMode = pathname.startsWith("/player");
  const isSearchPage = pathname === "/search";

  return (
    <>
      <div className="flex  ml-auto gap-x-2">
        <div className="flex space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="p-1 font-light rounded-lg text-lg space-x-0 flex items-center ">
                <p className="text-red-400 text-2xl animate-pulse">🔥</p>
                <span className="">25</span>
              </TooltipTrigger>
              <TooltipContent suppressHydrationWarning={true}>
                <p className="text-xs text-gray-500">Good Job.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* <UserButton /> */}
        </div>
      </div>
    </>
  );
};
export default NavbarRoutes;
