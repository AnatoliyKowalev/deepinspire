import React, { FC } from "react";

import { Banner, Contact, OurTeam } from "@/components/contact-us";

const ContactUsPage: FC = () => {
  return (
    <>
      <Banner />
      <Contact />
      <OurTeam />
    </>
  );
};

export default ContactUsPage;
