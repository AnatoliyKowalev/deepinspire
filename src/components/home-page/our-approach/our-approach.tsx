import React, { FC } from "react";

import Icon from "@/components/shared/icon";
import { SectionName, SectionTitle } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { APPROACHES } from "./constants";
import { SM } from "@/lib/style-mofifiers";

const OurApproach: FC = () => (
  <section className={cn("container", SM.sectionPad_xl)}>
    <SectionName withMb>OUR APPROACH:</SectionName>
    <SectionTitle className="mb-7.5 xs:mb-10 md:mb-15">
      We work in a boutique style
    </SectionTitle>
    <div className="grid xl:grid-cols-12 gap-10 md:gap-15 xl:gap-x-12">
      {APPROACHES.map(({ name, desc, icon }) => (
        <div className="xl:col-span-6 flex gap-3.75" key={icon}>
          <Icon className="text-2xl" icon={icon} />
          <div className="grid gap-3.75">
            <div className="font-montserrat font-bold text-xl/6">{name}</div>
            <p className="text-base xs:text-lg">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OurApproach;
