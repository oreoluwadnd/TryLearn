import { Button } from "@/components/ui/button";
import {
  InboxIcon,
  LucideIcon,
  SearchCheck,
  Bot,
  Compass,
  File,
  BarChartIcon,
  LucideBookmarkCheck,
  Instagram,
  TwitterIcon,
  Mail,
  EggFried,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface FeaturesProps {
  logo: LucideIcon;
  title: string;
  description: string;
}

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center py-3 space-y-8">
      <div className="py-20 flex flex-col justify-center items-center space-y-10">
        <h1 className="text-6xl font-bold text-center">
          Shape your Future: Join TryLearn
        </h1>
        <div className="flex space-x-4">
          <Button className="bg-white flex space-x-2 text-black hover:bg-white hover:opacity-85">
            <p>Get started for free</p> <EggFried className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <Link className="text-white underline text-sm" href="#">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link className="text-white underline text-sm" href="#">
            <TwitterIcon className="w-6 h-6" />
          </Link>
          <Link className="text-white underline text-sm" href="#">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <span className="text-white text-sm">© 2024 TryLearn</span>
      </div>
    </footer>
  );
}
