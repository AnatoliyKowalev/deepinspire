import React, { FC } from "react";

import Icon from "@/components/shared/icon";

import { cn } from "@/lib/utils";
import { ICONS } from "./constants";

import { ElProps } from "@/types/common";

const SocialMediaLinks: FC<ElProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-10 text-white text-2xl",
        className
      )}
    >
      {ICONS.map((icon, idx) => (
        <Icon icon={icon} key={idx} />
      ))}
    </div>
  );
};

export default SocialMediaLinks;
