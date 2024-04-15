import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { ArrowRightIcon, CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const customers = [
  {
    name: "Oreoluwa",
    avatar: "https://i.pravatar.cc/150?img=49",
  },
  {
    name: "Oreoluwa",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Oreoluwa",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Oreoluwa",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Oreoluwa",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
];

export default function LandingHero() {
  return (
    <section className="w-full  py-4 md:py-10 lg:py-10 xl:py-10">
      <div className="container px-4 md:px-6 flex justify-center">
        <div className=" max-w-4xl flex flex-col items-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight">
            Less time to learn,
            <br />
            More on growth with AI{"\n"}
          </h1>

          <ul className="list-none space-y-4 ">
            <li className="flex items-center space-x-2">
              <CheckCircle className="shrink-0 text-green-500" />
              <span>
                AI-Powered Course Generation finely tuned to specific needs
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="shrink-0 text-green-500" />
              <span>Seamless integration of video content from YouTube</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className=" shrink-0 text-green-500" />
              <span>Rich Course content sourced from across the web.</span>
            </li>
          </ul>
          <div className="bg-white flex-col p-5 shadow-lg rounded-lg mt-4  border border-slate-200 ">
            <div className="flex flex-col justify-center md:flex-row w-full">
              <Link href={"/dashboard"}>
                <Button
                  variant="default"
                  className="bg-[#E63E21] hover:opacity-80 hover:bg-[#ff5233] text-white"
                >
                  Get Started Now
                  <ArrowRightIcon className="w-6 h-6 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-6">
            <div className="flex -space-x-4">
              {customers.map((customer, index) => (
                <Avatar key={index}>
                  <AvatarFallback>{customer.name[0]}</AvatarFallback>
                  <AvatarImage alt="User 1" src={customer.avatar} />
                </Avatar>
              ))}
            </div>
            <span>1500+ Course Generated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
