"use client ";
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
  href,
  icon: Icon,
  color,
}: {
  name: string;
  href: string;
  color: string;
  icon: React.ComponentType<{ className: string }>;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // const pathname = usePathname();
  const router = useRouter();
  // const isActive =
  //   (pathname === "/" && href === "/") ||
  //   pathname === href ||
  //   pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center rounded-xl gap-x-2 text-black text-sm font-[500] pl-6 transition-all hover:bg-[#F8F4F2]"
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex items-center gap-2 py-4 w-full">
            <Icon
              className={cn(
                "text-black text-xl flex-shrink-0",
                true && "text-sky-700"
              )}
            />
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
  );
}
