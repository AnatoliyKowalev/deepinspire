import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 bg-transparent py-2 text-sm placeholder:text-dividers/50 selection:bg-primary dark:bg-transparent xs:text-lg",
        "border-b border-[var(--color-dividers)]/50 focus-within:border-[var(--color-dividers)] focus:outline-none leading-[2]",
        // "aria-invalid:border-red-500 aria-invalid:border-opacity-50",
        "transition-colors duration-200 ease-in-out",
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
