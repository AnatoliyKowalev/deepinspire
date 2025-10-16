import React, { FC } from "react";
import Link from "next/link";

import { NavLinksProps } from "./interfaces";

const NavLinks: FC<NavLinksProps> = ({ title, links }) => {
  return (
    <div className="h-fit mt-auto">
      {title ? <p className="mb-8 text-base font-semibold">{title}</p> : null}
      <div className="grid gap-6">
        {links.map(({ text, href }, idx) => (
          <Link
            href={href}
            className="hover:text-white relative hover:after:visible after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-grey-2 after:invisible after:absolute after:-left-5 after:top-[50%] after:transform after:translate-x-[-100%] after:translate-y-[-50%]"
            key={idx}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
