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

interface skillCardData {
  name: string;
  note: string;
}

interface SkillsCardProps {
  item: skillCardData;
}

export function SkillsCard({ item }: SkillsCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.note}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button>Take Course</Button>
      </CardFooter>
    </Card>
  );
}
