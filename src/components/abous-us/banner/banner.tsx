import React, { FC } from "react";

import RotatingLogo from "@/components/shared/rotating-logo";

import { cn } from "@/lib/utils";
import { SM } from "@/lib/style-mofifiers";

const Banner: FC = () => {
  return (
    <section className="pt-36.5 pb-12.5 xs:pb-15 md:pt-45 1xl:pt-59 md:pb-25 bg-[linear-gradient(90deg,rgb(223,189,171)_0%,rgb(224,198,223)_50%,rgb(219,215,243)_100%)]">
      <div className="container">
        <h1 className={cn("xs:max-w-105 md:max-w-none", SM.bannerTitle)}>
          Partners in overcoming your biggest challenges. Since 2000.
        </h1>
        <div className="relative pb-30 xs:pb-22.5 md:pb-5">
          <div className="bg-[pink] w-[280px] h-[122px] | mt-10 xs:mt-15"></div>
          <RotatingLogo className="absolute right-0 bottom-0 text-white text-[80px] md:text-[100px] lg:text-[115px]" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
