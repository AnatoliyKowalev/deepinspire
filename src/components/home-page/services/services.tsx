import React, { FC } from "react";

import InfoCards from "@/components/shared/info-cards";
import { SectionName } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { SM } from "@/lib/style-mofifiers";
import { ADVIZORY, ENGINEERING } from "./constants";

const Services: FC = () => {
  return (
    <section className={cn("container", SM.sectionPad_xl)}>
      <SectionName withMb>SERVICES:</SectionName>
      <div className="grid gap-15 xs:gap-20 lg:gap-25 xl:gap-30">
        <InfoCards
          title="Advisory"
          desc="Aligning your business needs with the right technology solutions"
          cards={ADVIZORY}
        />
        <InfoCards
          title="Engineering"
          desc="Helping you overcome your toughest tech challenges."
          cards={ENGINEERING}
        />
      </div>
    </section>
  );
};

export default Services;
