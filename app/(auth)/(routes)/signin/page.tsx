"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight, EggFriedIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Login() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to Back
        </h2>
        <div className="flex items-center gap-1  text-sm mt-2 justify-center">
          <p className=" text-center text-gray-600">New to Trylearn?</p>
          <Link className="text-[#E63E21] flex items-center" href="/signup">
            Get Started
          </Link>
        </div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <Input
                autoComplete="email"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="email"
                name="email"
                placeholder="Type your email"
                required
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <Input
                autoComplete="current-password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <div>
              <Button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700">
                Sign In
              </Button>
            </div>
          </form>
          <div className="mt-6 space-y-4">
            <Separator />

            <div className="mt-6 text-center text-sm text-black"></div>
            <div className="flex gap-3 items-center">
              <Button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50 hover:opacity-70">
                <FcGoogle className="h-5 w-5 " />
              </Button>
              <Button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium hover:bg-gray-50 hover:opacity-70">
                <FaLinkedin className="h-5 w-5 text-[#0a66c2]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
