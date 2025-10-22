"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // data-[state=checked]:border data-[state=checked]:border-[var(--color-dark-texting)] data-[state=unchecked]:border-none
        "text-white peer shrink-0 rounded-[2px] size-4.5 outline-none transition-all duration-500",
        // unchecked state
        "bg-dividers/50",
        // checked state
        "data-[state=checked]:bg-accent-primary",
        // focus
        "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
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
