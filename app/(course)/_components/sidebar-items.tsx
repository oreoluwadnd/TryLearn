"use client ";
import Icons from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SideBarItem({
  name,
  id,
  href,
}: {
  name: string;
  id: string;
  href: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const pathname = usePathname();
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  if (!mounted) {
    return null;
  }
  const url = pathname;
  const chapterId = url.split("/").slice(-1)[0];
  const isActive = id === chapterId;

  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center rounded-xl gap-x-2 text-black text-sm font-[500] pl-6 transition-all hover:bg-sky-300"
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-2 py-4 w-full">
              {isActive ? (
                <Icons.Pause
                  className={cn(
                    "text-black text-xl flex-shrink-0",
                    isActive && "text-sky-700"
                  )}
                />
              ) : (
                <Icons.Play
                  className={cn(
                    "text-black text-xl flex-shrink-0",
                    isActive && "text-sky-700"
                  )}
                />
              )}
              <p className="text-ellipsis truncate whitespace-nowrap overflow-hidden">
                {name}
              </p>
            </TooltipTrigger>
            <TooltipContent side="right" suppressHydrationWarning={true}>
              <p className="text-xs text-gray-500">{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <Separator />
    </>
  );
}
