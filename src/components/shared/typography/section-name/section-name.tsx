import React, { FC } from "react";

import { cn } from "@/lib/utils";

import { SectionNameProps } from "./interfaces";

const SectionName: FC<SectionNameProps> = ({
  className,
  withMb = false,
  children,
}) => {
  return (
    <h5
      className={cn(
        "font-montserrat leading-normal font-bold text-xl",
        className,
        {
          "mb-5 xs:mb-[30px]": withMb,
        }
      )}
    >
      {children}
    </h5>
  );
};

export default SectionName;
