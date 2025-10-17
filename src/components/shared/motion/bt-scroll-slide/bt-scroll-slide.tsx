"use client";

import { FC, PropsWithChildren, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { ElProps } from "@/types/common";

const BtScrollSlide: FC<PropsWithChildren<ElProps>> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0.15, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y: translateY, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default BtScrollSlide;
