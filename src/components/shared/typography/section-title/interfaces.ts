import { PropsWithChildren } from "react";

import { ElProps } from "@/types/common";

export interface SectionTitleProps extends PropsWithChildren<ElProps> {
  size?: "xl";
}
