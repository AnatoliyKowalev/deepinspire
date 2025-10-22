import React, { FC } from "react";
import Link from "next/link";

import Icon from "@/components/shared/icon";

import { cn } from "@/lib/utils";

import { TypeInfoCard } from "../../interfaces";

const InfoCard: FC<TypeInfoCard> = ({ icon, href, name, tags, className }) => (
  <Link
    href={href}
    className={cn(
      "group relative overflow-hidden grid rounded-2xl border border-mid-gray/10 p-6 gap-6 xl:h-full bg-white/90 [&>*]:z-2",
      className
    )}
  >
    <div className="absolute inset-0 bg-none group-hover:bg-gradient-to-r group-active:bg-gradient-to-r from-[#DFBDAB] via-[#E0C6DF] to-[#DBD7F3] transition-all duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100 z-1 pointer-events-none" />
    {!!icon ? (
      <div className="bg-light-texting rounded-lg w-20 h-20 grid place-items-center place-content-center group-hover:bg-light-texting/30">
        <Icon className="text-4xl" icon={icon} />
      </div>
    ) : null}
    <div className="font-montserrat text-base/[20px] xs:text-xl font-bold flex items-center justify-between gap-[10px]">
      {name}
      <Icon
        className="arr-icon opacity-0 group-hover:opacity-100 group-active:opacity-100 transform text-mid-gray transition-all duration-100"
        icon="arrow-right"
      />
    </div>
    {tags?.length ? (
      <div className="flex items-center flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <div
            className="leading-normal text-mid-gray rounded-[20px] border border-mid-gray/20 py-1 px-5 group-hover:bg-light-texting/30 group-hover:border-transparent group-active:bg-light-texting/30 group-active:border-transparent"
            key={idx}
          >
            {tag}
          </div>
        ))}
      </div>
    ) : null}
  </Link>
);

export default InfoCard;
