"use client ";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export function SideBarItem({
  name,
  href,
  icon: Icon,
  color,
}: {
  name: string;
  href: string;
  color: string;
  icon: React.ComponentType<{ size: number; className: string }>;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      title="Dashboard"
      className={cn(
        "flex items-center rounded-xl gap-x-2 text-black text-sm font-[500] pl-6 transition-all hover:bg-[#F8F4F2]",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-black", isActive && "text-sky-700")}
        />
        {name}
      </div>
      {/* <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      /> */}
    </button>
  );
}
