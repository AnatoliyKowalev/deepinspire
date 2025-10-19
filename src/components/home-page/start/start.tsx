import React, { FC } from "react";
import Image from "next/image";

import Icon from "@/components/shared/icon";

const Start: FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="container pb-57 xs:pb-64 xl:pb-40 mb-15 md:mb-25 xl:mb-30 relative">
        <div className="backdrop-blur-[10px] bg-light-texting/90 rounded-[10px] py-8 px-6 xs:px-8 md:px-[50px] md:pt-14 md:pb-19 xl:pb-25 lg:max-w-[690px] xl:max-w-[729px]">
          <Icon icon="flash" className="text-5xl" />
          <h4 className="mt-4 md:mt-6 mb-5 text-2xl/normal font-montserrat font-bold xs:text-[28px]">
            We start by understanding people’s needs and pains. Then we build
            tech solutions to address them.
          </h4>
          <p className="text-base/normal">
            The best digital products go beyond mere functionality. They create
            an emotional connection and become a significant part of people's
            daily lives. This philosophy drives our approach as a boutique
            software agency committed to meaningful user experiences.
          </p>
        </div>
        <Image
          src="/img/home/fintech.jpg"
          className="absolute right-0 bottom-0 -z-1 object-cover object-left h-[445px] w-[635px] transform translate-x-[50%] xs:translate-x-[30%] md:translate-x-[10%] lg:translate-none"
          width={1000}
          height={701}
          alt="We start by understanding people’s needs and pains. Then we build tech solutions to address them."
        />
      </div>
    </section>
  );
};

export default Start;
