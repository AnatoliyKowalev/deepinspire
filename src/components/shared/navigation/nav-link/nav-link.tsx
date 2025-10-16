import React, { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

const NavLink: FC<PropsWithChildren<LinkProps>> = ({
  href = "#",
  children,
  ...rest
}) => {
  return (
    <Link href={href} className="h-link hover:text-white" {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
