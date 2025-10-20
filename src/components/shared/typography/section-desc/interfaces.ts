import { PropsWithChildren } from "react";

import { ElProps } from "@/types/common";

export interface SectionDescProps extends PropsWithChildren<ElProps> {
  secondary?: boolean;
}
