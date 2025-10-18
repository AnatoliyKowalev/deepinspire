import React, { FC, PropsWithChildren, useState } from "react";

import { SM } from "@/lib/style-mofifiers";

import { NavDropdownProps } from "./interfaces";
import { cn } from "@/lib/utils";

const NavDropdown: FC<PropsWithChildren<NavDropdownProps>> = ({
  name,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div
      className={cn("group flex-col h-link !h-fit", {
        open,
      })}
    >
      <div
        onClick={toggleOpen}
        className={`${SM.withRightCaret} h-link flex justify-between items-center w-full after:rotate-[-45deg] group-[.open]:after:rotate-[135deg] group-[.hs]/header:group-[.open]:text-accent-secondary group-[.hs]/header:group-[.open]:after:border-accent-secondary`}
        role="button"
      >
        {name}
      </div>
      {open ? children : null}
    </div>
  );
};

export default NavDropdown;
