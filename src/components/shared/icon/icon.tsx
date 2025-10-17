import React, { FC } from "react";

import { IconProps } from "./interfaces";
import { cn } from "@/lib/utils";

const Icon: FC<IconProps> = ({ icon, className }) => {
  return <i className={cn(`icon-${icon}`, className)} />;
};

export default Icon;
