import * as React from "react";

import { cn } from "@/lib/utils";

import { InputVariant, variants } from "./input";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  variant?: InputVariant;
}

function Textarea({
  className,
  variant = InputVariant.asDark,
  ...props
}: TextareaProps) {
  const cls = variants[variant];

  return (
    <textarea
      data-slot="textarea"
      // placeholder-text-dividers/50
      // border-[var(--color-dividers)]/50
      // focus-within:border-[var(--color-dividers)]
      className={cn(
        "w-full resize-none min-w-0 bg-transparent py-2 text-sm xs:text-lg",
        "border-b focus:outline-none leading-[2]",
        // "aria-invalid:border-red-500 aria-invalid:border-opacity-50",
        "transition-colors duration-200 ease-in-out",
        cls,
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
