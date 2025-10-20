// "use server";

import React, { FC } from "react";

import {
  Start,
  Intro,
  Counters,
  Services,
  WhoWeAre,
  Industries,
  OurClients,
  CaseStudies,
  Testimonials,
} from "@/components/home-page";

const HomePage: FC = () => {
  return (
    <>
      <Intro />
      <WhoWeAre />
      <Counters />
      <OurClients />
      <Services />
      <Start />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <div className="bg-[pink] h-[100vh] z-[-1] relative"></div>
    </>
  );
};

export default HomePage;
