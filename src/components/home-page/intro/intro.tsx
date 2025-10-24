import React, { FC } from "react";
import Link from "next/link";

import IntroVideo from "./intro-video";
import Icon from "@/components/shared/icon";

import { INTRO_LINKS, INTRO_LIST } from "./constants";

const Intro: FC = () => (
  <section className="h-screen h-187.5 xs:h-208 bg-accent-dark pt-39 xs:pt-31 md:pt-39 sxs:pr-8 font-montserrat xs:pl-15 1xl:pt-54 md:h-[1050px] xl:max-h-[650px] 1xl:h-[970px] relative">
    <div className="relative container h-full text-light-texting font-medium flex flex-col gap-4 xs:gap-5 xl:gap-12 xs:text-base xl:pb-15 1xl:justify-between 1xl:text-xl z-2">
      <h1 className="font-bold relative text-[28px]/normal xs:text-[30px]/normal xl:text-3xl max-w-147.5 xl:max-w-110.5 1xl:text-4xl 1xl:max-w-147.5 xl:leading-normal">
        Boutique software development company that bridges business and
        technology.
        <Icon
          icon="flash"
          className="absolute left-0 xs:-left-5 -top-5 xs:top-0 transform -translate-y-full xs:translate-y-0 xs:-translate-x-full absolute text-4xl"
        />
      </h1>
      <ul className="my-1 grid gap-4">
        {INTRO_LIST.map((option, idx) => (
          <li key={idx}>{`/ ${option}`}</li>
        ))}
      </ul>
      <div className="grid gap-4 md:flex md:mt-10 md:items-center md:gap-20">
        {INTRO_LINKS.map(({ link, text }, idx) => (
          <Link
            href={link}
            className="relative w-fit"
            aria-label={text}
            key={idx}
          >
            {text}
            <Icon
              className="text-2xl md:text-[32px] absolute -right-2 md:-right-3 transform translate-x-full translate-y-[-50%] top-[50%]"
              icon="goto"
            />
          </Link>
        ))}
      </div>
    </div>
    <IntroVideo />
  </section>
);

export default Intro;
