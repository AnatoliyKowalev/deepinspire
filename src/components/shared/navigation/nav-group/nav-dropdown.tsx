import React, { FC, PropsWithChildren, useState } from "react";

import { STYLE_MODIFIERS } from "@/lib/style-mofifiers";

import { NavDropdownProps } from "./interfaces";

const NavDropdown: FC<PropsWithChildren<NavDropdownProps>> = ({
  name,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="flex-col h-link !h-fit">
      <div
        onClick={toggleOpen}
        className={`${STYLE_MODIFIERS.withRightCaret} h-link flex justify-between items-center w-full
        after:rotate-[${open ? "135deg" : "-45deg"}]`}
        role="button"
      >
        {name}
      </div>
      {open ? children : null}
    </div>
  );
};

export default NavDropdown;
