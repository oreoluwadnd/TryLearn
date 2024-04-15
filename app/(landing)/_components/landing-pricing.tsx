import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <section className="w-full py-10 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 border-[#E63E21] bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border">
            <div>
              <h3 className="text-2xl font-bold text-center">Basic</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$0</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Skill Assessment Tool
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  AI Course Generation
                </li>
              </ul>
            </div>
            <Link href="/dashboard">
              <Button className="w-full bg-[#E63E21] hover:bg-[#E63E21] hover:opacity-85">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border ">
            <div className="px-3 py-1 text-sm text-white bg-[#E63E21] rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Coming Soon
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Pro</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$0</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                  Skill Assessment Tool
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  AI Course Generation
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Career Growth Roadmap
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Resume Builder
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="mt-6">
                <Button className="w-full">Coming soon</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 relative bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div className="px-3 py-1 text-sm text-white bg-[#E63E21] rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Coming Soon
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Premuim</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$0</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Skill Assessment Tool
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  AI Course Generation
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Career Growth Roadmap
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Resume Builder
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Skills Trends Analysis
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Coming Soon</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
