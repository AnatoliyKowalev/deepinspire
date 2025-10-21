import { SectionName, SectionTitle } from "@/components/shared/typography";
import { SM } from "@/lib/style-mofifiers";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { APPROACHES } from "./constants";
import Icon from "@/components/shared/icon";

const OurApproach: FC = () => {
  return (
    <section className={cn("container", SM.sectionPad_xl)}>
      <SectionName withMb>OUR APPROACH:</SectionName>
      <SectionTitle>We work in a boutique style</SectionTitle>
      <div className="grid xl:grid-cols-12">
        {APPROACHES.map(({ name, desc, icon }) => (
          <div className="xl:col-span-6" key={icon}>
            <Icon icon={icon} />
            <h5>{name}</h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproach;
