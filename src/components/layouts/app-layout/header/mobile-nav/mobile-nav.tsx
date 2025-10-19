import React, { FC } from "react";

import ViewNav from "@/components/layouts/app-layout/header/view-nav";
import SocialMediaLinks from "@/components/shared/social-media-links";

import { MobileNavProps } from "./interfaces";

const MobileNav: FC<MobileNavProps> = ({ open }) => {
  return (
    <nav
      className={`xl:hidden fixed top-(--h-header) left-0 w-full bg-grey-3/95 group-[.hs]/header:bg-white transition-all duration-300 ${
        open
          ? "h-[calc(100%_-_var(--h-header))] overflow-y-scroll"
          : "overflow-hidden h-0"
      }`}
    >
      <div className="container h-fit min-h-full flex flex-col divide-y divide-gray-100 [&>.h-link]:cursor-pointer [&>.h-link]:border-none [&_.h-link]:h-21 [&_.h-link]:font-bold [&>.h-link]:flex [&>.h-link]:items-center [&>.h-link:not(:last-of-type)]:border-b [&>.h-link:not(:last-of-type)]:border-solid [&>.h-link:not(:last-of-type)]:border-grey-2/10 group-[.hs]/header:[&>.h-link:not(:last-of-type)]:border-dark-texting/10">
        <ViewNav />
        <SocialMediaLinks className="px-4 py-7 lg:justify-end group-[.hs]/header:text-dark-texting" />
      </div>
    </nav>
  );
};

export default MobileNav;
