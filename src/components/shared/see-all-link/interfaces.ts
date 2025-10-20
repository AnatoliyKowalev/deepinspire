import { PropsWithChildren } from "react";
import { LinkProps } from "next/link";

export interface SeeAllLinkProps extends PropsWithChildren<LinkProps> {
  icon?: string;
}
