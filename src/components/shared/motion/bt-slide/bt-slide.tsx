"use client";

import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { ElProps } from "@/types/common";

const BtSlide: FC<PropsWithChildren<ElProps>> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default BtSlide;
