import { ReactNode } from "react";

import { NavLinksProps } from "@/components/shared/navigation/nav-links";

export interface NavGroupProps {
  blocks: NavLinksProps[][];
  info: TypeInfo;
  variant?: TypeDisplay;
}

export interface NavDropdownProps {
  name: ReactNode;
}

export type TypeDisplay = "mobile" | "desktop";

type TypeInfo = {
  link: string;
  title: string;
  tags: string[];
  bgSrc: string;
};
