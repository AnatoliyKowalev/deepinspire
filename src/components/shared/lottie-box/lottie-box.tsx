"use client";

import React, { FC, useEffect, useRef } from "react";
import { LottieOptions, useLottie } from "lottie-react";

const LottieBox: FC<LottieOptions> = ({ ...rest }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultOptions = {
    loop: false, // run only once
    autoplay: false, // control manually
    ...rest,
  };

  const { View, play } = useLottie(defaultOptions);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [play]);

  return (
    <div ref={containerRef} className="lottie-box">
      {View}
    </div>
  );
};

export default LottieBox;
