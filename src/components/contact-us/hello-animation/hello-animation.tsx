"use client";

import React, { FC } from "react";

import animationData from "@/lottie/hello.json";
import LottieBox from "@/components/shared/lottie-box";

const HelloAnimation: FC = () => (
  <section className="container pb-15 xs:pb-20 md:pb-25 xl:pb-30">
    <LottieBox className="-mx-4 md:m-0" animationData={animationData} />
  </section>
);

export default HelloAnimation;
