import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

import NavDropdown from "./nav-dropdown";
import NavLinks from "@/components/shared/navigation/nav-links";

import { STYLE_MODIFIERS } from "@/lib/style-mofifiers";

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
      <div className="grid gap-10 pt-4 pb-7 w-full">
        {blocks.map((block) =>
          block.map((option, idx) => <NavLinks {...option} key={idx} />)
        )}
      </div>
    </NavDropdown>
  ) : (
    <div className="group">
      <button className={`${STYLE_MODIFIERS.withRightCaret} h-link`}>
        {children}
      </button>
      <div className="fixed left-0 top-(--h-header) w-screen bg-grey-3/95 backdrop-blur-[25px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="container gap-6 grid grid-cols-12">
          <div className="grid gap-12 col-span-7 pt-15 pb-12">
            {blocks.map((block, idx) => (
              <div className="flex gap-20 h-fit" key={idx}>
                {block.map((option, idx) => (
                  <NavLinks {...option} key={idx} />
                ))}
              </div>
            ))}
          </div>
          <a
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
              <h6 className="text-white text-lg w-fit relative">
                {info.title}
                <GoArrowRight
                  className="absolute -right-4 top-[50%] transform translate-x-[100%] translate-y-[-50%]"
                  size={24}
                />
              </h6>
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavGroup;
