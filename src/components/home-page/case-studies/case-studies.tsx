import React, { FC } from "react";
import Image from "next/image";

import SeeAllLink from "@/components/shared/see-all-link";
import { SectionName, SectionTitle } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { SM } from "@/lib/style-mofifiers";
import { CASE_STUDIES_CARDS } from "./constants";

const CaseStudies: FC = () => {
  return (
    <section className={cn("container", SM.sectionPad_xl)}>
      <SectionName withMb>CASE STUDIES:</SectionName>
      <SectionTitle className="mb-[30px] xs:mb-10 md:mb-15">
        Check out how we’ve helped our clients succeed.
      </SectionTitle>
      <div className="grid gap-4 xs:gap-6 md:gap-10 lg:gap-[30px] xl:gap-[50px] lg:grid-cols-2">
        {CASE_STUDIES_CARDS.map(({ link, name, desc, img }, idx) => (
          <a
            className="rounded-2xl overflow-hidden relative group"
            href={link}
            key={idx}
          >
            <Image
              src={`/img/home/${img}.jpg`}
              className="transition-transform duration-300 group-hover:scale-[1.1] group-active:scale-[1.1]"
              width={1000}
              height={1200}
              alt={name}
            />
            <div className="absolute bottom-0 left-0 w-full bg-light-texting/85 backdrop-blur-[10px] p-4 flex flex-col gap-3 xs:p-6 lg:min-h-31 xl:min-h-33">
              <h5 className="text-base/[20px] font-montserrat font-bold md:text-xl lg:text-base/[20px] xl:text-xl my-auto">
                {name}
              </h5>
              <p className="text-mid-gray leading-[21px] xs:text-base xs:leading-[24px]">
                {desc}
              </p>
            </div>
          </a>
        ))}
      </div>
      <SeeAllLink href="#">Show all cases</SeeAllLink>
    </section>
  );
};

export default CaseStudies;
