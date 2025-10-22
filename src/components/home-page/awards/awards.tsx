"use client";

import React, { FC, useCallback, useState } from "react";
import Image from "next/image";

import AwardWrapper from "./components";
import Icon from "@/components/shared/icon";
import { SectionName } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { AWARDS } from "./constants";
import { SM } from "@/lib/style-mofifiers";

const Awards: FC = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = useCallback(() => setShowAll((prev) => !prev), []);

  return (
    <section className="container pb-15 xs:pb-20 md:pb-7 lg:mb-25 xl:mb-30">
      <SectionName className="text-center mb-7.5 xs:mb-10 xs:text-left">
        AWARDS:
      </SectionName>
      <div className="grid grid-cols-2 gap-x-10 xs:grid-cols-3 md:grid-cols-5 xl:grid-cols-6">
        {AWARDS.map(({ img, alt, ...rest }) => (
          <AwardWrapper
            className={cn({
              "!block": showAll,
            })}
            {...rest}
            key={alt}
          >
            <Image
              className="size-27.5 md:size-25 xl:size-30"
              src={img}
              width={240}
              height={240}
              alt={alt}
            />
          </AwardWrapper>
        ))}
      </div>
      <button onClick={toggleShow} className={SM.accentPrimaryBtn}>
        Show all awards
        <Icon
          className="text-[32px] ml-1.5"
          icon={showAll ? "caret-up" : "caret-down"}
        />
      </button>
    </section>
  );
};

export default Awards;
