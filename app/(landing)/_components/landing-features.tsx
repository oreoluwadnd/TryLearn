import {
  InboxIcon,
  LucideIcon,
  SearchCheck,
  Bot,
  Compass,
  File,
  BarChartIcon,
  LucideBookmarkCheck,
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
    title: "AI-Powered Course Generation",
    logo: Bot,
    description:
      "Course generation is finely tuned to meet the specific needs of the learner",
  },
  {
    title: "Effortless Video Integration",
    logo: Compass,
    description:
      "Enhance your learning experience with seamless integration of video content from YouTube and other platforms",
  },
  {
    title: "Rich Course Content",
    logo: File,
    description:
      "With access to a vast repository of high-quality videos spanning a wide range of topics",
  },
  {
    title: "User-Friendly Interface",
    logo: BarChartIcon,
    description:
      "Navigate our platform with ease thanks to our intuitive user interface",
  },
  {
    title: "Generate High-Quality Notes",
    logo: LucideBookmarkCheck,
    description:
      " Our platform utilizes advanced algorithms to generate comprehensive and high-quality notes summarizing each course module",
  },
];
export default function Features() {
  return (
    <div className="w-full py-10 md:py-24 lg:py-10 xl:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none bg-clip-text">
                Discover Our Unique Features
              </h1>
              <p className="max-w-[600px]  md:text-xl mx-auto">
                Our features are designed supercharge your career and help you
                learn faster and more efficiently.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col shadow-lg  items-center space-y-2 border p-4 rounded-lg"
                  >
                    <div className="p-2 bg-black/90 rounded-full">
                      {<feature.logo color="white" />}
                    </div>
                    <h2 className="text-xl font-bold">{feature.title}</h2>
                    <p className=" dark:text-zinc-100">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
