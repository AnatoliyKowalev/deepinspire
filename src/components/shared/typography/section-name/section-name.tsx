import React, { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { ElProps } from "@/types/common";

const SectionName: FC<PropsWithChildren<ElProps>> = ({
  children,
  className,
}) => {
  return (
    <h5
      className={cn(
        "font-montserrat leading-normal font-bold text-xl",
        className
      )}
    >
      {children}
    </h5>
  );
};

export default SectionName;
