"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import Icon from "@/components/shared/icon";
import { SectionDesc } from "@/components/shared/typography";

const Start: FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set((-offsetX / rect.width) * 30);
    y.set((-offsetY / rect.height) * 30);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="Aoverflow-y-hidden">
      <div
        className="container pb-57 xs:pb-64 xl:pb-40 mb-15 md:mb-25 xl:mb-30 relative overflow-hidden lg:overflow-visible"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="backdrop-blur-[10px] bg-light-texting/90 rounded-[10px] py-8 px-6 xs:px-8 md:px-[50px] md:pt-14 md:pb-19 xl:pb-25 lg:max-w-[690px] xl:max-w-[729px]"
        >
          <Icon icon="flash" className="text-5xl" />
          <div className="mt-4 md:mt-6 mb-5 text-2xl/normal font-montserrat font-bold xs:text-[28px]">
            We start by understanding people’s needs and pains. Then we build
            tech solutions to address them.
          </div>
          <SectionDesc>
            The best digital products go beyond mere functionality. They create
            an emotional connection and become a significant part of
            people&rsquo;s daily lives. This philosophy drives our approach as a
            boutique software agency committed to meaningful user experiences.
          </SectionDesc>
        </motion.div>
        <Image
          src="/img/home/fintech.jpg"
          className="absolute right-0 bottom-0 -z-1 object-cover object-left h-[445px] w-[635px] transform translate-x-[50%] xs:translate-x-[30%] md:translate-x-[10%] lg:translate-none"
          width={1000}
          height={701}
          alt="We start by understanding people&rsquo;s needs and pains. Then we build tech solutions to address them."
        />
      </div>
    </section>
  );
};

export default Start;
