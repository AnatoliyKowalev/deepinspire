import React, { FC } from "react";
import Image from "next/image";

import Icon from "@/components/shared/icon";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

import { FEEDBACKS } from "./constants";

const Feedbacks: FC = () => (
  <div className="h-full w-full bg-light-texting xl:col-span-6 xl:col-start-8 hidden md:flex md:flex-col rounded-lg mt-10 overflow-hidden lg:mt-0">
    <Carousel
      className="h-full flex flex-col pb-8.5"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="h-full" wrapperClassName="w-full h-full">
        {FEEDBACKS.map(({ text, name, role, photo }, idx) => (
          <CarouselItem className="h-full" key={idx}>
            <div className="h-full pt-10 px-12">
              <Icon className="text-2xl" icon="quote-up" />
              <p className="font-montserrat text-base font-bold mt-3 mb-7.5">
                {text}
              </p>
              <div className="flex items-center gap-12.5">
                <div className="relative min-w-fit">
                  <Image
                    className="rounded-full size-28"
                    src={photo}
                    width={240}
                    height={240}
                    alt={name}
                  />
                  <div className="absolute right-0 -bottom-0 transform translate-x-[40%] translate-y-[20%] bg-light-texting rounded-full size-10 flex items-center justify-center">
                    <Icon className="text-xl text-grey-3" icon="linkedin" />
                  </div>
                </div>
                <div className="grid gap-[5px]">
                  <div className="text-lg">{name}</div>
                  <div className="text-sm">{role}</div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
    <div className="bg-mid-gray h-25.25 flex items-center justify-center relative">
      <Image
        className="absolute top-0 h-full z-0 object-contain left-[28%] lg:left-[13%] xl:left-[14%]"
        src="/img/contact-us/bottom.png"
        width={400}
        height={200}
        alt="Widget bg"
      />
      <div className="flex gap-14 items-center z-1">
        <Image
          className="w-32.75 h-9"
          src="/svg/contact-us/widget_stars_left.svg"
          width={150}
          height={40}
          alt="Widget stars left"
        />
        <Image
          className="w-24 h-9"
          src="/svg/contact-us/widget_stars_right.svg"
          width={150}
          height={40}
          alt="Widget stars right"
        />
      </div>
    </div>
  </div>
);

export default Feedbacks;
