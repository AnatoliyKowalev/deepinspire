import React, { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { ElProps } from "@/types/common";

const SectionTitle: FC<PropsWithChildren<ElProps>> = ({
  className,
  children,
}) => (
  <h4
    className={cn(
      "leading-none font-medium text-4xl xs:text-[50px]",
      className
    )}
  >
    {children}
  </h4>
);

export default SectionTitle;
