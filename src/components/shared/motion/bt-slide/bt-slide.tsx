"use client";

import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { BtSlideProps } from "./interfaces";

const BtSlide: FC<PropsWithChildren<BtSlideProps>> = ({
  children,
  className,
  amount = 0.2,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default BtSlide;
