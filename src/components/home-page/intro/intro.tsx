import React, { FC } from "react";

import IntroVideo from "./intro-video";
import Icon from "@/components/shared/icon";

import { INTRO_LINKS, INTRO_LIST } from "./constants";

const Intro: FC = () => (
  <section className="h-screen bg-accent-dark pt-39 xs:pt-31 md:pt-39 sxs:pr-8 font-montserrat xs:pl-15 1xl:pt-54 md:min-h-[1000px] xl:min-h-auto xl:h-[650px] xl:h-[970px] relative">
    <div className="container h-full text-light-texting font-medium flex flex-col gap-4 xs:gap-5 xl:gap-12 xs:text-base xl:pb-15 1xl:justify-between 1xl:text-xl">
      <h1 className="font-bold relative text-[28px]/normal xs:text-[30px]/normal 1xl:text-4xl max-w-[590px]">
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
          <a href={link} className="relative w-fit" key={idx}>
            {text}
            <Icon
              className="text-2xl md:text-[32px] absolute -right-2 md:-right-3 transform translate-x-full translate-y-[-50%] top-[50%]"
              icon="goto"
            />
          </a>
        ))}
      </div>
    </div>
    <IntroVideo />
  </section>
);

export default Intro;
