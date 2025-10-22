import React, { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const AccentGroup: FC<
  PropsWithChildren<{ name: string; className?: string }>
> = ({ name, className, children }) => {
  return (
    <div className={cn("grid gap-2.5 h-fit", className)}>
      <p className="text-accent-primary text-base font-bold h-fit">{name}</p>
      {children}
    </div>
  );
};

export default AccentGroup;
