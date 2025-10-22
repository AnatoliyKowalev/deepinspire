import React, { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

const NavLink: FC<PropsWithChildren<LinkProps>> = ({
  href = "#",
  children,
  ...rest
}) => (
  <Link
    href={href}
    className="h-link hover:text-white group-[.hs]/header:hover:text-accent-secondary"
    {...rest}
  >
    {children}
  </Link>
);

export default NavLink;
