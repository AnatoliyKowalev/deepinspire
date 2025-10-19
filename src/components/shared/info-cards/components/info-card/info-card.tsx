import React, { FC } from "react";
import Link from "next/link";

import Icon from "@/components/shared/icon";

import { TypeInfoCard } from "../../interfaces";

const InfoCard: FC<TypeInfoCard> = ({ icon, href, name, tags }) => {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden grid rounded-2xl border border-mid-gray/10 p-6 gap-6 xl:h-full"
    >
      <div className="absolute inset-0 bg-none group-hover:bg-gradient-to-r group-active:bg-gradient-to-r from-[#DFBDAB] via-[#E0C6DF] to-[#DBD7F3] transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100 -z-1 pointer-events-none" />
      <div className="bg-light-texting rounded-lg w-20 h-20 grid place-items-center place-content-center">
        <Icon className="text-4xl" icon={icon} />
      </div>
      <div className="font-montserrat text-base/none xs:text-xl font-bold">
        {name}
      </div>
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
    </Link>
  );
};

export default InfoCard;
