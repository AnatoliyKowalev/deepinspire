import React, { FC } from "react";

import InfoCards from "@/components/shared/info-cards";
import SectionName from "@/components/shared/typography/section-name";

import { ADVIZORY, ENGINEERING } from "./constants";

const Services: FC = () => {
  return (
    <section className="container py-15 xs:py-20 md:py-25 xl:py-30">
      <SectionName className="mb-5 xs:mb-[30px]">SERVICES:</SectionName>
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
