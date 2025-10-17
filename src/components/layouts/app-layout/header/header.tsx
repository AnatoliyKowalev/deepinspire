"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { ARR_3 } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-screen bg-accent-dark/70 shadow-(--header-shadow) h-(--h-header) text-grey-2 z-10">
      <div className="container h-full">
        <div className="flex items-center justify-start xl:justify-between gap-5 h-full">
          {/* <!-- Mobile burger menu trigger --> */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-[22px] h-[22px] flex flex-col justify-between xl:hidden group"
          >
            {ARR_3.map((line) => (
              <span
                className={cn(
                  "block h-[2px] w-full bg-light-texting/80 rounded-sm transition-all duration-300",
                  {
                    [open ? "rotate-45 translate-y-[10px]" : ""]: line === 1,
                    [`w-[75%] ${open ? "opacity-0" : ""}`]: line === 2,
                    [open ? "-rotate-45 -translate-y-[10px]" : ""]: line === 3,
                  }
                )}
                key={line}
              />
            ))}
          </button>
          <Link href="#">
            <Icon
              icon="logo"
              className="text-light-texting text-4xl xl:text-[32px]"
            />
          </Link>
          <DesktopNav />
          <Button variant="outline" asChild>
            <Link className="px-5 ml-auto" href="#">
              Contact us
            </Link>
          </Button>
        </div>
      </div>
      <MobileNav open={open} />
    </header>
  );
}
