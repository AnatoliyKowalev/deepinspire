import React, { FC } from "react";

import { cn } from "@/lib/utils";

import { SectionTitleProps } from "./interfaces";

const SectionTitle: FC<SectionTitleProps> = ({ className, size, children }) => (
  <div
    className={cn(
      "leading-none font-medium text-4xl xs:text-[50px]",
      className,
      {
        "font-montserrat font-bold text-4xl/normal xs:text-[50px]":
          size === "xl",
      }
    )}
  >
    {children}
  </div>
);

export default SectionTitle;
