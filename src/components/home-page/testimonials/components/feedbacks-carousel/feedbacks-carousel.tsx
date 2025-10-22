"use client";

import React, { FC } from "react";
import AutoHeight from "embla-carousel-auto-height";

import Feedback from "./feedback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FEEDBACKS } from "./constants";

const FeedbacksCarousel: FC = () => (
  <Carousel
    plugins={[AutoHeight()]}
    className="py-15 md:py-17.5 xl:py-20 px-[25px] xs:px-0"
    opts={{
      loop: true,
      align: "start",
      slidesToScroll: 1,
    }}
  >
    <CarouselPrevious />
    <CarouselContent className="xs:w-80 md:w-116.5 xl:w-full">
      {FEEDBACKS.map((feedback, idx) => (
        <CarouselItem
          className="shrink-0 basis-full xl:basis-1/2 flex items-center justify-center"
          key={idx}
        >
          <Feedback {...feedback} />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselNext />
  </Carousel>
);

export default FeedbacksCarousel;
