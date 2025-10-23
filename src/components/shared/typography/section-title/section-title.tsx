import React, { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { ElProps } from "@/types/common";

const SectionTitle: FC<PropsWithChildren<ElProps>> = ({
  className,
  children,
}) => (
  <div
    className={cn(
      "leading-none font-medium text-4xl xs:text-[50px]",
      className
    )}
  >
    {children}
  </div>
);

export default SectionTitle;
