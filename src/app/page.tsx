"use server";

import React, { FC } from "react";

import Intro from "@/components/home-page/intro";

const HomePage: FC = () => {
  return (
    <>
      <Intro />
      <div className="bg-[white] h-[100vh] z-[-1] relative"></div>
    </>
  );
};

export default HomePage;
