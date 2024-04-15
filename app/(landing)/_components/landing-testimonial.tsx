import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Bot, LucideIcon, SearchCheck, StarIcon } from "lucide-react";
import Link from "next/link";

interface TestimoniallProps {
  rating: number;
  name: string;
  description: string;
  image: string;
}

const testimonial: TestimoniallProps[] = [
  {
    name: "Taylor B",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=44",
    description: `"I've tried countless online learning platforms, but none compare to the personalized experience I found here.
     The AI-generated courses and high-quality notes have revolutionized my learning journey. Highly recommend"`,
  },
  {
    name: "Daniel H",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=58",
    description: `"As a busy professional, finding time for learning can be challenging. This platform has been a game-changer for me.
     The ability to access tailored courses and relevant YouTube videos on-the-go has made learning convenient and enjoyable."`,
  },
  {
    name: "Eric W",
    image: "https://i.pravatar.cc/150?img=57",
    rating: 5,
    description: `"I've been using this platform to supplement my university studies, and I couldn't be happier with the results. The curated selection of high-quality content, combined with the interactive assessments, 
    has  enhanced my understanding of complex subjects."`,
  },
  {
    name: "Jessica F",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=49",
    description: `"After using this platform for just a few weeks,
     I've already noticed a significant improvement in my understanding of various subjects. The personalized learning paths and AI-generated notes have made complex topics easy to grasp."`,
  },
];
export default function Testimonial() {
  return (
    <div className="w-full py-10 md:py-24 lg:py-10 xl:py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-8 text-center">
          <div className="space-y-2 w-full justify-center">
            <Link href={"/dashboard"}>
              <Button className="w-full animate-pulse mb-3 max-w-80 bg-[#E63E21]  hover:opacity-80 hover:bg-[#ff5233] text-white">
                GET STARTED FOR FREE
              </Button>
            </Link>
            <p className="max-w-[600px]  md:text-xl mx-auto">
              Unlock Your Potential: Hear What Users Are Saying at TryLearn
            </p>
          </div>
          <Carousel
            className=""
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="w-full">
              {testimonial.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col p-6 justify-center items-center border border-gray-200 rounded-lg">
                    <blockquote className="text-center">
                      {testimonial.description}
                    </blockquote>
                    <div className="mt-4 flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="mt-2 font-semibold">{testimonial.name}</p>
                    <Avatar>
                      <AvatarImage alt="Damon Chen" src={testimonial.image} />
                    </Avatar>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="mr-8" />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const renderStars = (rating: number) => {
  const maxStars = 5; // Maximum number of stars
  const filledStars = Math.min(Math.max(0, rating), maxStars); // Ensure rating is between 0 and maxStars

  return [...Array(maxStars)].map((_, index) => (
    <StarIcon
      key={index}
      className={index < filledStars ? "text-yellow-400" : "text-gray-400"}
    />
  ));
};
