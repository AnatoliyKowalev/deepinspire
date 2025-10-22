import React, { FC } from "react";
import Image from "next/image";

import InfoCard from "@/components/shared/info-cards/components/info-card";
import {
  SectionDesc,
  SectionName,
  SectionTitle,
} from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { SM } from "@/lib/style-mofifiers";
import { INDUSTRIES_LINKS } from "./constants";

const Industries: FC = () => (
  <section
    className={cn(
      "bg-light-texting overflow-hidden grid gap-10 xs:gap-14",
      SM.sectionPad_xl
    )}
  >
    <div className="container grid gap-10 lg:grid-cols-12 lg:gap-7 xl:gap-0">
      <div className="lg:col-span-7">
        <SectionName withMb>INDUSTRIES:</SectionName>
        <SectionTitle>Fintech is our core expertise.</SectionTitle>
        <SectionDesc>
          For 25 years, we’ve been helping fintech products CEOs, CTOs and
          Product Owners to overcome their biggest challenges. Being at the
          forefront of fintech development, we understand how it is evolving and
          are always one step ahead.
        </SectionDesc>
        <SectionDesc secondary>
          DeepInspire has consistently reaffirmed its position as one of the top
          fintech companies annually since 2021.
        </SectionDesc>
      </div>
      <Image
        src="/img/home/clutch.png"
        className="mx-auto xs:w-[371px] md:min-w-[371px] lg:col-span-5 xl:m-0 xl:ml-auto"
        width={800}
        height={700}
        alt="Fintech is our core expertise"
      />
    </div>
    <div className="container grid lg:grid-cols-12">
      <div className="grid gap-4 mx-auto xs:w-[330px] md:w-full md:grid-cols-2 md:gap-x-[30px] md:gap-y-6 lg:gap-x-6 lg:col-span-10 xl:col-span-7">
        {INDUSTRIES_LINKS.map((link, idx) => (
          <InfoCard
            className="border-none [&_.arr-icon]:opacity-100 hover:[&_.arr-icon]:text-dark-texting active:[&_.arr-icon]:text-dark-texting"
            {...link}
            key={idx}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
