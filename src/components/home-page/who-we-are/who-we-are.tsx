"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

import Icon from "@/components/shared/icon";
import InfoBlock from "./components/info-block";
import ScrollIndicator from "./components/scroll-indicator";
import { SectionName } from "@/components/shared/typography";
import { BtScrollSlide, BtSlide } from "@/components/shared/motion";

import { cn } from "@/lib/utils";
import { BLOCKS } from "./constants";

const WhoWeAre: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);
  const [showDeepspinner, setShowDeepspinner] = useState(false);

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
      if (v < 0.1) setProgress(1);
      else if (v < 0.7) setProgress(2);
      else setProgress(3);

      setShowDeepspinner(v > 0.1 && v < 1);
    });
  }, [progressSpring]);

  return (
    <section
      ref={containerRef}
      className="container pt-30 pb-15 xs:pb-20 md:pb-25 lg:pb-30 flex flex-col lg:grid lg:grid-cols-12 relative"
    >
      <BtSlide className="grid place-content-start place-items-start lg:col-span-3 pt-2 h-fit lg:sticky lg:top-[30%]">
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
      <Icon
        className={cn(
          "text-[115px] text-dividers opacity-0 sticky top-[30%] h-fit pointer-events-none transition-all duration-300 animate-deepspinner col-span-1 col-start-12 hidden lg:block 1xl:transform 1xl:translate-x-full",
          {
            "lg:opacity-100": showDeepspinner,
          }
        )}
        icon="deepspinner"
      />
    </section>
  );
};

export default WhoWeAre;
