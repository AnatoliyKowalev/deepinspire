// "use server";

import React, { FC } from "react";

import Intro from "@/components/home-page/intro";
import Counters from "@/components/home-page/counters";
import WhoWeAre from "@/components/home-page/who-we-are";
import OurClients from "@/components/home-page/our-clients";

const HomePage: FC = () => {
  return (
    <>
      <Intro />
      <WhoWeAre />
      <Counters />
      <OurClients />
      <div className="bg-[pink] h-[100vh] z-[-1] relative"></div>
    </>
  );
};

export default HomePage;
