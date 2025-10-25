import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const AwardWrapper: FC<
  PropsWithChildren<{ link?: string; className?: string }>
> = ({ link, className, children }) => {
  const combined = cn(
    "mx-auto w-fit mb-10 [&:nth-child(n+7)]:hidden md:[&:nth-child(n+6)]:hidden xl:[&:nth-child(n+6)]:block xl:[&:nth-child(n+7)]:hidden transition-transform duration-300 hover:scale-110",
    className
  );

  return !!link ? (
    <Link href={link} className={combined} target="blank" rel="noreferrer">
      {children}
    </Link>
  ) : (
    <div className={combined}>{children}</div>
  );
};

export default AwardWrapper;
