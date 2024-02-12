import { EggFriedIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <Link href="/" className="">
        <EggFriedIcon className="h-12 mx-auto w-auto" />
      </Link>
      {children}
    </div>
  );
}
