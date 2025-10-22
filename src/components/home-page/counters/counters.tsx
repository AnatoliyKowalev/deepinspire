import React, { FC } from "react";

import { COUNTERS } from "./constants";

const AnimatedRow: FC = () => (
  <div
    className="flex gap-6 animate-infinite-scroll will-change-transform"
    style={{
      backfaceVisibility: "hidden",
    }}
  >
    {COUNTERS.map(({ text, value, bg, color = "dark-texting" }, idx) => (
      <div
        className={`grid place-content-center place-items-center gap-4 py-12 px-25 rounded-[48px] ${bg} text-${color} min-w-90`}
        key={idx}
      >
        <div className={`text-[100px] font-montserrat font-bold`}>{value}</div>
        <p className="text-base">{text}</p>
      </div>
    ))}
  </div>
);

const Counters: FC = () => (
  <section className="w-screen mb-15 xs:mb-20 md:mb-25 xl:mb-30 overflow-hidden">
    <div className="flex gap-6 w-full">
      <AnimatedRow />
      <AnimatedRow />
      <AnimatedRow />
      <AnimatedRow />
    </div>
  </section>
);

export default Counters;
