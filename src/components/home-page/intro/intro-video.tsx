import { FC } from "react";

import SourceVideo from "@/components/shared/source-video";

const IntroVideo: FC = () => (
  <div className="absolute w-full bottom-0 right-0 overflow-hidden pb-[80px] mb-[-80px] xl:h-fit xl:max-w-[1000px] 1xl:max-w-[1500px] xl:top-0 pointer-events-none">
    <SourceVideo
      className="max-w-none ml-auto w-100 xs:w-125 transform translate-y-20 xs:translate-x-4 xs:translate-y-18 md:translate-y-24 md:translate-x-6 md:w-225 lg:w-250 lg:translate-x-8 xl:translate-y-10 xl:translate-x-50 1xl:w-375 1xl:translate-x-80 1xl:-translate-y-4"
      webm="/video/home/intro.webm"
      mp4="/video/home/intro-safari.mp4"
      aria-hidden="true"
      role="presentation"
      // poster="/img/home/intro.webp"
      autoPlay
      loop
    />
  </div>
);

export default IntroVideo;
