import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/typography";

import { cn } from "@/lib/utils";
import { TEAM } from "./constants";
import { SM } from "@/lib/style-mofifiers";

const OurTeam: FC = () => (
  <section className={cn("container", SM.sectionPad_xl)}>
    <SectionTitle className="mb-8 xs:mb-10 md:mb-15" size="xl">
      Connect with our team
    </SectionTitle>
    <div className="grid gap-10 xs:gap-15 md:grid-cols-2 xl:grid-cols-12 lg:gap-y-20">
      {TEAM.map(({ name, role, linkedin, mail, photo }, idx) => (
        <div
          className="lg:col-span-5 flex items-center justify-between gap-5 lg:gap-8"
          key={idx}
        >
          <Image
            className="rounded-full size-30 xs:size-40 md:size-35 lg:size-40 xl:size-47.5"
            src={photo}
            width={380}
            height={380}
            alt={name}
          />
          <div className="grid w-full">
            <div className="text-lg font-medium leading-tight">{name}</div>
            <div className="text-sm text-grey-2 mt-3 mb-6">{role}</div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <Link href={linkedin} target="_blank">
                  <Icon icon="linkedin" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`mailto:${mail}`}>
                  <Icon icon="email" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OurTeam;
