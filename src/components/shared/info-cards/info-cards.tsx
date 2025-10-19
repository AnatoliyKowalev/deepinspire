import React, { FC } from "react";

import InfoCard from "./components/info-card";
import SectionTitle from "../typography/section-title/section-title";

import { InfoCardsProps } from "./interfaces";

const InfoCards: FC<InfoCardsProps> = ({ title, desc, cards }) => {
  return (
    <div className="grid">
      {title ? <SectionTitle className="mb-5">{title}</SectionTitle> : null}
      {desc ? <p className="text-base mb-[30px] xs:mb-10">{desc}</p> : null}
      <div className="md:columns-2 xl:columns-3 xl:grid xl:grid-cols-3 gap-4 xs:gap-6 md:gap-[30px]">
        {cards.map((card, idx) => (
          <div
            className="break-inside-avoid mb-4 xs:mb-6 md:mb-[30px] xl:mb-0"
            key={idx}
          >
            <InfoCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
