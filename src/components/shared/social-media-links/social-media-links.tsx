import React, { FC } from "react";

import { cn } from "@/lib/utils";
import { ICONS } from "./constants";

import { DivProps } from "@/types/common";

const SocialMediaLinks: FC<DivProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-10 text-white",
        className
      )}
    >
      {ICONS.map((Icon, idx) => (
        <Icon key={idx} />
      ))}
    </div>
  );
};

export default SocialMediaLinks;
