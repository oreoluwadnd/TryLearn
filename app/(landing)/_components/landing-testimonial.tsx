import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChartIcon,
  Bot,
  Compass,
  File,
  LucideBookmarkCheck,
  LucideIcon,
  SearchCheck,
  StarIcon,
} from "lucide-react";
import React from "react";

interface FeaturesProps {
  logo: LucideIcon;
  title: string;
  description: string;
}

const features: FeaturesProps[] = [
  {
    title: "Skill Assessment Tool",
    logo: SearchCheck,
    description:
      "Input skills and goals for personalized development recommendations..",
  },
  {
    title: "AI Course Recommendations",
    logo: Bot,
    description:
      "AI suggests tailored courses based on skill gaps and career goals.",
  },
];
export default function Testimonial() {
  return (
    <section className="w-full py-10 md:py-24 lg:py-10 xl:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2 w-full justify-center">
              <Button className="w-full animate-pulse mb-3 max-w-80 bg-[#E63E21]  hover:opacity-80 hover:bg-[#ff5233] text-white">
                GET STARTED FOR FREE
              </Button>
              <p className="max-w-[600px]  md:text-xl mx-auto">
                Unlock Your Potential: Hear What Users Are Saying at TryLearn
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg"
                  >
                    <blockquote className="text-center">
                      The Career Growth Roadmap has been a godsend! It&apos;s
                      simplified my career trajectory in AI, giving me a clear
                      path forward. Highly recommended!&quot;
                    </blockquote>
                    <div className="mt-4 flex">
                      <StarIcon className="text-yellow-400" />
                      <StarIcon className="text-yellow-400" />
                      <StarIcon className="text-yellow-400" />
                      <StarIcon className="text-yellow-400" />
                      <StarIcon className="text-yellow-400" />
                    </div>
                    <p className="mt-2 font-semibold">Alex T.</p>
                    <Avatar>
                      <AvatarImage
                        alt="Damon Chen"
                        src="/placeholder.svg?height=64&width=64"
                      />
                    </Avatar>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
