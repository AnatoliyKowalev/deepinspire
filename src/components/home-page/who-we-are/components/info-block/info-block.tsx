import React, { FC, PropsWithChildren } from "react";

import { InfoBlockProps } from "./interfaces";

const InfoBlock: FC<PropsWithChildren<InfoBlockProps>> = ({
  title,
  children,
}) => (
  <div className="grid gap-2 xs:gap-5">
    <h2 className="text-2xl leading-normal font-medium xs:text-3xl 1xl:text-4xl">
      {title}
    </h2>
    <p className="leading-[27px] xs:leading-[29px] lg:leading-9 text-base xs:text-lg">
      {children}
    </p>
  </div>
);

export default InfoBlock;
