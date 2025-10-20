import { PropsWithChildren } from "react";

import { ElProps } from "@/types/common";

export interface SectionNameProps extends PropsWithChildren<ElProps> {
  withMb?: boolean;
}
