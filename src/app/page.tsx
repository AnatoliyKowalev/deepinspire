// "use server";

import React, { FC } from "react";

import {
  Start,
  Intro,
  Awards,
  Counters,
  Services,
  WhoWeAre,
  Industries,
  OurClients,
  OurApproach,
  MoreReviews,
  CaseStudies,
  Testimonials,
  WhyDeepnspire,
} from "@/components/home-page";

const HomePage: FC = () => (
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
    <MoreReviews />
    <WhyDeepnspire />
    <OurApproach />
    <Awards />
  </>
);

export default HomePage;
