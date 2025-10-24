"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  variant?: CheckboxVariant;
}

export enum CheckboxVariant {
  "fill" = "fill",
  "outline" = "outline",
}

export const variants = {
  [CheckboxVariant.fill]:
    "bg-dividers/50 data-[state=checked]:bg-accent-primary",
  [CheckboxVariant.outline]: "",
};

function Checkbox({
  className,
  variant = CheckboxVariant.fill,
  ...props
}: CheckboxProps) {
  const cls = variants[variant];

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // data-[state=checked]:border data-[state=checked]:border-[var(--color-dark-texting)] data-[state=unchecked]:border-none
        "text-white peer shrink-0 rounded-[2px] size-4.5 outline-none transition-all duration-500",
        "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        cls,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="w-3.5 h-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
