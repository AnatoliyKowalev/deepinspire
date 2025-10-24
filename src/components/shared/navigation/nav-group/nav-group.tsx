import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";

import NavDropdown from "./nav-dropdown";
import Icon from "@/components/shared/icon";
import NavLinks from "@/components/shared/navigation/nav-links";

import { SM } from "@/lib/style-mofifiers";

import { NavGroupProps } from "./interfaces";

const NavGroup: FC<PropsWithChildren<NavGroupProps>> = ({
  children,
  blocks,
  info,
  variant = "mobile",
}) => {
  const isMobile = variant === "mobile";

  return isMobile ? (
    <NavDropdown name={children}>
      <div className="grid gap-10 pt-4 pb-7 w-full pl-4 lg:pl-0">
        {blocks.map((block) =>
          block.map((option, idx) => <NavLinks {...option} key={idx} />)
        )}
      </div>
    </NavDropdown>
  ) : (
    <div className="group">
      <button className={`h-link ${SM.withRightCaret}`}>{children}</button>
      <div className="fixed left-0 top-(--h-header) w-screen before:bg-grey-3/95 group-[.hs]/header:before:bg-white before:backdrop-blur-[25px] opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 before:content-[''] before:w-full before:h-full before:pointer-events-none before:left-0 before-top-0 before:absolute before:z-0 after:content-[''] after:h-[50%] after:w-full after:shadow-menu after:absolute after:left-0 after:bottom-0 after:pointer-events-none after:-z-1 text-sm">
        <div className="container gap-6 grid grid-cols-12">
          <div className="grid gap-12 col-span-7 pt-8.75 pb-11.5">
            {blocks.map((block, idx) => (
              <div className="flex gap-20 h-fit" key={idx}>
                {block.map((option, idx) => (
                  <NavLinks {...option} key={idx} />
                ))}
              </div>
            ))}
          </div>
          <Link
            href={info.link}
            className="col-span-5 h-full relative group/info overflow-hidden min-h-[310px]"
          >
            <Image
              src={info.bgSrc}
              className="absolute left-0 top-0 w-full h-full object-cover"
              width={800}
              height={900}
              alt={info.title}
            />
            <div className="p-7 bg-grey-3/90 absolute left-0 bottom-0 w-full grid gap-5 opacity-0 group-hover/info:opacity-100 group-hover/info:translate-y-[0px] transform translate-y-[10px] transition-all duration-200 ease-linear">
              <div className="text-white text-lg w-fit relative">
                {info.title}
                <Icon
                  className="absolute -right-2 top-[50%] transform translate-x-[100%] translate-y-[-48%] text text-2xl"
                  icon="arrow-right"
                />
              </div>
              <div className="flex items-center gap-4">
                {info.tags.map((tag, idx) => (
                  <div
                    className="bg-white/15 px-4 py-2 rounded text-grey-2"
                    key={idx}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavGroup;
