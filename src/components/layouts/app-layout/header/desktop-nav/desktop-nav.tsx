import React, { FC } from "react";

import ViewNav from "@/components/layouts/app-layout/header/view-nav";

const DesktopNav: FC = () => {
  return (
    <nav className="hidden xl:flex [&_.h-link]:h-(--h-header) [&_.h-link]:flex [&_.h-link]:items-center [&_.h-link]:transition-all [&_.h-link]:duration-200 [&_.h-link]:ease-linear [&_.h-link]:cursor-pointer mx-auto flex flex-1 items-center justify-between max-w-[700px]">
      <ViewNav />
    </nav>
  );
};

export default DesktopNav;
