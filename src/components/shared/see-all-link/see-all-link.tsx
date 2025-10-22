import React, { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

import Icon from "@/components/shared/icon";

import { cn } from "@/lib/utils";
import { SM } from "@/lib/style-mofifiers";

const SeeAllLink: FC<PropsWithChildren<LinkProps>> = ({ href, children }) => (
  <Link
    href={href}
    className={cn("mt-10 xs:mt-12.5 md:mt-15", SM.accentPrimaryBtn)}
  >
    {children}
    <Icon className="text-[32px] mt-0.5" icon="caret-right" />
  </Link>
);

export default SeeAllLink;
