"use client";

import {
  ArrowDownWideNarrowIcon,
  LogOut,
  SearchCheck,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import path from "path";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Icons from "./icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
          <Link
            href="/search"
            className="border-2 p-1 font-light rounded-lg text-lg border-red-300 space-x-0 flex items-center "
          >
            <Icons.Fire className="text-red-400" />
            <span>60</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="w-10 h-10"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};
export default NavbarRoutes;
