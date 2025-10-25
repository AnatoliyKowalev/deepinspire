import React, { FC } from "react";

import {
  Banner,
  Contact,
  HelloAnimation,
  OurTeam,
} from "@/components/contact-us";

const ContactUsPage: FC = () => {
  return (
    <>
      <Banner />
      <Contact />
      <OurTeam />
      <HelloAnimation />
    </>
  );
};

export default ContactUsPage;
