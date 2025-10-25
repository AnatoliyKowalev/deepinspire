import React, { FC } from "react";

import NavLink from "@/components/shared/navigation/nav-link";
import NavGroup from "@/components/shared/navigation/nav-group";

import {
  FINTECH_BLOCKS,
  FINTECH_INFO,
  SERVICES_BLOCKS,
  SERVICES_INFO,
} from "../constants";
import { NavGroupProps } from "@/components/shared/navigation/nav-group/interfaces";

const ViewNav: FC<Pick<NavGroupProps, "variant">> = ({ variant }) => (
  <>
    <NavGroup blocks={FINTECH_BLOCKS} info={FINTECH_INFO} variant={variant}>
      FINTECH
    </NavGroup>
    <NavGroup blocks={SERVICES_BLOCKS} info={SERVICES_INFO} variant={variant}>
      SERVICES
    </NavGroup>
    <NavLink href="#">CASE STUDIES</NavLink>
    <NavLink href="#">TESTIMONIALS</NavLink>
    <NavLink href="/about-us">ABOUT US</NavLink>
    <NavLink href="#">BLOG</NavLink>
  </>
);

export default ViewNav;
