import React, { FC } from "react";

import Icon from "@/components/shared/icon";

import { cn } from "@/lib/utils";

import { ElProps } from "@/types/common";

const RotatingLogo: FC<ElProps> = ({ className }) => (
  <Icon
    className={cn(
      "w-fit h-fit text-[115px] text-dividers h-fit pointer-events-none transition-all duration-300 animate-deepspinner",
      className
    )}
    icon="deepspinner"
  />
);
export default RotatingLogo;
