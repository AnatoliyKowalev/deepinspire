import React, { FC } from "react";
import Image from "next/image";

import { SectionDesc } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { COUNTRY_INFO } from "@/lib/constants";

import { FeedbackProps } from "./interfaces";

const Feedback: FC<FeedbackProps> = ({
  photo,
  name,
  role,
  country,
  feedback,
}) => {
  const countryData = COUNTRY_INFO[country];

  return (
    <div className="grid gap-6">
      <div className="flex gap-3 xs:gap-5">
        <Image
          className="rounded-full size-25 xs:size-30"
          src={photo}
          width={240}
          height={240}
          alt={name}
        />
        <div className="grid place-content-center place-items-start">
          <div className="font-montserrat text-lg/[22px] font-bold mb-2">
            {name}
          </div>
          <div className="whitespace-pre-line xs:whitespace-normal text-xs/normal xs:text-sm mb-3">
            {role}
          </div>
          <div className="text-xs/[18px] xs:text-sm flex itemsc-center gap-2 text-grey-2">
            <Image
              src={countryData.flag}
              className="w-7 h-3.5 xs:w-9 xs:h-4.5"
              width={36}
              height={18}
              alt={country}
            />
            {countryData.name}
          </div>
        </div>
      </div>
      <div className="text-base">
        {feedback.map((option, idx) => (
          <SectionDesc
            className={cn("", {
              "m-0 font-montserrat font-bold": idx === 0,
            })}
            secondary
            key={idx}
          >
            {option}
          </SectionDesc>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
