"use client";

import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import SourceVideo from "@/components/shared/source-video";
import { SectionName } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { SM } from "@/lib/style-mofifiers";

const WhyDeepnspire: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ended, setEnded] = useState(false);
  const [hash, setHash] = useState<string>("0");

  const parentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(parentRef, { amount: 0.5, once: true });

  return (
    <section
      className="relative bg-grey-3 h-134.5 xs:h-125 md:h-142 lg:h-179.5 1xl:h-229 overflow-hidden flex flex-col items-center"
      ref={parentRef}
    >
      <div
        className={cn(
          "container text-center flex flex-col items-center gap-5 text-light-texting relative h-full z-1",
          SM.sectionPad_md
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          key={`${hash}1`}
        >
          <SectionName>WHY DEEPINSPIRE:</SectionName>
        </motion.div>
        <div
          className={cn(
            "whitespace-pre-line xs:whitespace-normal",
            SM.bannerTitle
          )}
        >
          <motion.div
            initial={{ translateY: "40px", opacity: 0 }}
            animate={
              isInView
                ? { translateY: 0, opacity: 1 }
                : { translateY: "40px", opacity: 0 }
            }
            transition={{
              opacity: { delay: 2.5, duration: 1, ease: "easeOut" },
              translateY: { delay: 2.5, duration: 0.5, ease: "easeOut" },
            }}
            className="inline md:block md:m-0"
            key={`${hash}2`}
          >
            {`We deliver \n solutions that bring`}
          </motion.div>
          <motion.div
            initial={{ translateY: "40px", opacity: 0 }}
            animate={
              isInView
                ? { translateY: 0, opacity: 1 }
                : { translateY: "40px", opacity: 0 }
            }
            transition={{
              opacity: { delay: 2.7, duration: 1, ease: "easeOut" },
              translateY: { delay: 2.7, duration: 0.5, ease: "easeOut" },
            }}
            className="xs:inline ml-2 md:block md:m-0"
            key={`${hash}3`}
          >
            our clients
          </motion.div>
        </div>
        {ended ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView && ended ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 bottom-[22%] xs:bottom-[16%] md:bottom-[25%] lg:bottom-[32%] xl:bottom-[32%] 1xl:bottom-[42%] transform -translate-x-1/2 grid place-items-center gap-7 md:gap-9 lg:gap-12 xl:gap-14"
            key={`${hash}4`}
          >
            <Image
              className="max-w-none hidden md:block xs:w-105 md:w-150 lg:w-210"
              src="/svg/to-the-next-level.svg"
              width={900}
              height={100}
              alt="To the next level"
            />
            <Image
              className="max-w-69.25 md:hidden"
              src="/svg/to-the-next-level-xs.svg"
              width={900}
              height={100}
              alt="To the next level xs"
            />
            <Image
              onClick={() => {
                setHash(() => `${Math.random()}`);
                videoRef.current?.play();
              }}
              className="size-14 md:size-18 cursor-pointer"
              src="/svg/play-again.svg"
              role="button"
              width={80}
              height={80}
              alt="Play again"
            />
          </motion.div>
        ) : null}
      </div>
      {isInView ? (
        <SourceVideo
          ref={videoRef}
          onEnded={() => setEnded(true)}
          onPlay={() => setEnded(false)}
          className={`z-0 absolute pointer-events-none object-cover absolute top-auto bottom-0 inset-0 w-120 xs:w-130 md:w-175.25 lg:w-218 xl:w-247.5 1xl:w-336 ${ended ? "opacity-0" : "opacity-100"} left-1/2 transform -translate-x-1/2 xs:translate-y-14 md:translate-y-12 lg:translate-y-0 xl:translate-y-10 1xl:translate-y-0 object-center max-w-[1344px]`}
          webm="/video/home/next-level-chrome.webm"
          mp4="/video/home/next-level-safari.mp4"
          poster="/img/home/next-level-frame.png"
          preload="auto"
        />
      ) : null}
    </section>
  );
};

export default WhyDeepnspire;
