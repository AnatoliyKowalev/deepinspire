import React, { FC } from "react";

import { cn } from "@/lib/utils";

import { SectionNameProps } from "./interfaces";

const SectionName: FC<SectionNameProps> = ({
  className,
  withMb = false,
  children,
}) => (
  <div
    className={cn(
      "font-montserrat leading-normal font-bold text-xl",
      className,
      {
        "mb-5 xs:mb-[30px]": withMb,
      }
    )}
  >
    {children}
  </div>
);

export default SectionName;
