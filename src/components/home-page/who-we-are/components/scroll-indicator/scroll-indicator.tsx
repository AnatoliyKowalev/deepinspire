import React, { FC } from "react";

import { cn } from "@/lib/utils";
import { ARR_3 } from "@/lib/constants";

import { ScrollIndicatorProps } from "./interfaces";

const ScrollIndicator: FC<ScrollIndicatorProps> = ({ progress }) => {
  return (
    <div className="hidden lg:grid gap-15 transform translate-x-full">
      {ARR_3.map((sircle) => {
        const active = progress === sircle;

        return (
          <span
            className={cn(
              "relative w-[10px] h-[10px] rounded-full bg-dark-texting after:content-[''] after:absolute after:border-dark-texting after:left-[50%] after:top-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full after:transition-all after:duration-300 after:w-0 after:h-0 before:content-[''] before:w-[1px] before:bg-dark-texting before:absolute before:bottom-0 before:transform before:left-[50%] before:translate-x-[-50%] before:translate-y-full before:transition-all before:duration-300 before:h-0",
              {
                "after:border-[1px] after:w-8 after:h-8": active,
                "before:h-16": sircle < 3 && progress > sircle,
              }
            )}
            key={sircle}
          />
        );
      })}
    </div>
  );
};

export default ScrollIndicator;
