import React, { FC } from "react";
import Link from "next/link";

import Icon from "@/components/shared/icon";

import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "./constants";

import { SocialMediaLinksProps } from "./interfaces";

const SocialMediaLinks: FC<SocialMediaLinksProps> = ({
  className,
  linkClassName,
}) => (
  <div
    className={cn(
      "flex items-center justify-center gap-10 text-white text-2xl",
      className
    )}
  >
    {SOCIAL_LINKS.map(({ link, icon }, idx) => (
      <Link
        href={link}
        className={cn(
          "relative after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-white after:absolute after:left-[50%] after:-bottom-2 after:transform after:translate-x-[-50%] after:translate-y-full after:opacity-0 hover:after:opacity-100 active:after:opacity-100 hover:text-accent-primary active:text-accent-primary hover:after:bg-accent-primary active:after:bg-accent-primary after:transition-all after:duration-300 transition-all duration-300",
          linkClassName
        )}
        key={idx}
      >
        <Icon icon={icon} />
      </Link>
    ))}
  </div>
);

export default SocialMediaLinks;
