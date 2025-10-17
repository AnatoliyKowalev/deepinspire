"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

import InfoBlock from "./components/info-block";
import ScrollIndicator from "./components/scroll-indicator";
import SectionName from "@/components/shared/typography/section-name";
import BtSlide from "@/components/shared/motion/bt-slide";

import { BLOCKS } from "./constants";
import BtScrollSlide from "@/components/shared/motion/bt-scroll-slide";

const WhoWeAre: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end end"],
  });

  const progressSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    return progressSpring.on("change", (v) => {
      if (v < 0.3) setProgress(1);
      else if (v < 0.75) setProgress(2);
      else setProgress(3);
    });
  }, [progressSpring]);

  return (
    <section
      ref={containerRef}
      className="container py-30 grid grid-cols-1 lg:grid-cols-12"
    >
      <BtSlide
        className="grid place-content-start place-items-start col-span-3 pt-2 h-fit lg:sticky lg:top-[30%]"
        amount={0.08}
      >
        <SectionName className="mb-10 md:mb-15 lg:mb-12 1xl:mb-15">
          WHO WE ARE:
        </SectionName>
        <ScrollIndicator progress={progress} />
      </BtSlide>
      <div className="grid gap-10 md:gap-15 lg:col-span-6 1xl:col-span-8">
        <BtSlide>
          <InfoBlock title={BLOCKS[0].title}>{BLOCKS[0].text}</InfoBlock>
        </BtSlide>
        {BLOCKS.slice(1).map(({ title, text }, idx) => (
          <BtScrollSlide key={idx}>
            <InfoBlock title={title}>{text}</InfoBlock>
          </BtScrollSlide>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
