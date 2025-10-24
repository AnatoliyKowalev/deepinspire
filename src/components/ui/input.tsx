import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  variant?: InputVariant;
}

export enum InputVariant {
  "asDivider" = "asDivider",
  "asDark" = "asDark",
}

export const variants = {
  [InputVariant.asDivider]:
    "placeholder-text-dividers/50 border-[var(--color-dividers)]/50 focus-within:border-[var(--color-dividers)]",
  [InputVariant.asDark]:
    "placeholder-grey-2 border-[var(--color-dividers)] focus-within:border-[var(--color-dark-texting)]",
};

function Input({
  className,
  type,
  variant = InputVariant.asDark,
  ...props
}: InputProps) {
  const cls = variants[variant];

  return (
    <input
      type={type}
      data-slot="input"
      // placeholder-text-dividers/50
      // border-[var(--color-dividers)]/50
      // focus-within:border-[var(--color-dividers)]
      // selection:bg-primary
      className={cn(
        "w-full min-w-0 bg-transparent py-2 text-sm xs:text-lg",
        "border-b  focus:outline-none leading-[2]",
        // "aria-invalid:border-red-500 aria-invalid:border-opacity-50",
        "transition-colors duration-200 ease-in-out",
        cls,
        className
      )}
      {...props}
      onFocus={() => {
        console.log("sss");
      }}
      onBlur={() => "aaa"}
    />
  );
}

export { Input };
