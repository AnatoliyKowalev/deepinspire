import React, { FC } from "react";
import Link from "next/link";

import { NavLinksProps } from "./interfaces";

const NavLinks: FC<NavLinksProps> = ({ title, links }) => (
  <div className="h-fit mt-auto">
    {title ? <p className="mb-8 text-base font-semibold">{title}</p> : null}
    <div className="grid gap-6">
      {links.map(({ text, href }, idx) => (
        <Link
          href={href}
          className="relative font-normal hover:text-white group-[.hs]/header:hover:text-accent-secondary group-[.hs]/header:active:text-accent-secondary relative after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-grey-2 group-[.hs]/header:after:bg-accent-secondary  after:absolute after:-left-2 lg:after:-left-5 after:top-[50%] after:transform after:translate-x-[-100%] after:translate-y-[-50%] after:opacity-0 hover:after:opacity-100 active:after:opacity-100"
          key={idx}
        >
          {text}
        </Link>
      ))}
    </div>
  </div>
);

export default NavLinks;
