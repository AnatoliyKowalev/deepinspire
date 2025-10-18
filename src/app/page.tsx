// "use server";

import React, { FC } from "react";

import Intro from "@/components/home-page/intro";
import WhoWeAre from "@/components/home-page/who-we-are";

const HomePage: FC = () => {
  return (
    <>
      <Intro />
      <WhoWeAre />
      <div className="bg-[white] h-[100vh] z-[-1] relative"></div>
    </>
  );
};

export default HomePage;
