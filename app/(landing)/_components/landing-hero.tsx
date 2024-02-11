import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, CheckCircle } from "lucide-react";
import React from "react";

const customers = [
  {
    name: "Shad",
    avatar:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
  },
  {
    name: "Shad",
    avatar:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
  },
  {
    name: "Shad",
    avatar:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
  },
  {
    name: "Shad",
    avatar:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
  },
  {
    name: "Shad",
    avatar:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
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
              <CheckCircle className="text-green-500" />
              <span>Identify the skills you need to advance your career</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" />
              <span>Generate courses based on the skills 30 seconds</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" />
              <span>
                Get resume and cover letters for your newly acquired skills
              </span>
            </li>
          </ul>
          <div className="bg-white flex-col p-5 shadow-lg rounded-lg  flex space-x-4 mt-4  border border-slate-200 ">
            <div className="flex flex-col md:flex-row w-full gap-2">
              <Input
                type="email"
                className="text-lg focus:ring-blue-500 focus:ring-offset-red-500 focus:shadow-md focus:outline-none focus:ring-offset-2 "
                placeholder="your@email.com"
              />
              <Button
                variant="default"
                className="bg-[#E63E21]  hover:opacity-80 hover:bg-[#ff5233] text-white"
              >
                Start my free month
                <ArrowRightIcon className="w-6 h-6 ml-1" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-6">
            <div className="flex -space-x-4">
              {customers.map((customer, index) => (
                <Avatar key={index}>
                  <AvatarImage alt="User 1" src={customer.avatar} />
                </Avatar>
              ))}
            </div>
            <span>Join 1500+ professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
