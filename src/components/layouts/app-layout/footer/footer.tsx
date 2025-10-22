import React, { FC } from "react";

import ContactUs from "./components/contact-us";

const Footer: FC = () => (
  <footer className="overflow-hidden">
    <ContactUs />
    <div className="h-[100px]">Footer</div>
  </footer>
);

export default Footer;
