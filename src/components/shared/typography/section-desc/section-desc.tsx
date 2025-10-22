import React, { FC } from "react";

import { cn } from "@/lib/utils";

import { SectionDescProps } from "./interfaces";

const SectionDesc: FC<SectionDescProps> = ({
  className,
  secondary = false,
  children,
}) => (
  <p className={cn("text-base/normal", secondary ? "mt-4" : "mt-5", className)}>
    {children}
  </p>
);

export default SectionDesc;
