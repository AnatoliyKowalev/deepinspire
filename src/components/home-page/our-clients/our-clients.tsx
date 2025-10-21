import React, { FC } from "react";
import Image from "next/image";

import { SectionName } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { SM } from "@/lib/style-mofifiers";
import { IMG_CLIENTS } from "./constants";

const OurClients: FC = () => {
  return (
    <section className={cn("bg-light-texting", SM.sectionPad_md)}>
      <div className="container">
        <SectionName className="text-center xs:text-2xl md:text-left mb-8 md:mb-16">
          Our clients:
        </SectionName>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-y-14 md:gap-x-0 xl:gap-y-20">
          {IMG_CLIENTS.map((img) => (
            <Image
              src={`/svg/our-clients/${img}.svg`}
              className="mx-auto md:m-0 h-23 lg:h-[100px]"
              width={200}
              height={150}
              alt={img}
              key={img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
