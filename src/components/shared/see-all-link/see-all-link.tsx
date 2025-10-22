import React, { FC } from "react";
import Link from "next/link";

import Icon from "@/components/shared/icon";

import { SeeAllLinkProps } from "./interfaces";

const SeeAllLink: FC<SeeAllLinkProps> = ({
  href,
  icon = "caret-right",
  children,
}) => (
  <Link
    href={href}
    className="text-accent-primary block text-center text-xl font-bold mt-10 font-montserrat xs:mt-12.5 xs:w-fit md:mt-15 flex items-center"
  >
    {children}
    <Icon className="text-[32px] mt-0.5" icon={icon} />
  </Link>
);

export default SeeAllLink;
