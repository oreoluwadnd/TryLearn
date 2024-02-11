import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface BlogCardData {
  title: string;
  snippet: string;
  link: string;
}

interface BlogCardProps {
  item: BlogCardData;
}

export function BlogCard({ item }: BlogCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.snippet}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link href={item.link!} target="_blank">
          <Button>Read</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
