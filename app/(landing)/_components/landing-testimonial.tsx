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

interface TestimoniallProps {
  rating: number;
  name: string;
  description: string;
  image: string;
}

const testimonial: TestimoniallProps[] = [
  {
    name: "Masu'd",
    rating: 5,
    image:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
    description: `"The Career Growth Roadmap has been a godsend! It's
                        simplified my career trajectory in AI, giving me a clear
                        path forward. Highly recommended"`,
  },
  {
    name: "James",
    rating: 5,
    image:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
    description: `"The Career Growth Roadmap has been a godsend! It's
                        simplified my career trajectory in AI, giving me a clear
                        path forward. Highly recommended"`,
  },
  {
    name: "Charles",
    image:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
    rating: 5,
    description: `"The Career Growth Roadmap has been a godsend! It's
                        simplified my career trajectory in AI, giving me a clear
                        path forward. Highly recommended"`,
  },
  {
    name: "Alex",
    rating: 5,
    image:
      "https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png",
    description: `"The Career Growth Roadmap has been a godsend! It's
                        simplified my career trajectory in AI, giving me a clear
                        path forward. Highly recommended"`,
  },
];
export default function Testimonial() {
  return (
    <section className="w-full py-10 md:py-24 lg:py-10 xl:py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-8 text-center">
          <div className="space-y-2 w-full justify-center">
            <Button className="w-full animate-pulse mb-3 max-w-80 bg-[#E63E21]  hover:opacity-80 hover:bg-[#ff5233] text-white">
              GET STARTED FOR FREE
            </Button>
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
    </section>
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
