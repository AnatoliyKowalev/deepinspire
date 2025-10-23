import { FC } from "react";

import SourceVideo from "@/components/shared/source-video";

const IntroVideo: FC = () => (
  <div className="absolute w-full bottom-0 right-0 overflow-hidden pb-[55px] mb-[-55px] xl:h-fit xl:max-w-[1000px] 1xl:max-w-[1500px] xl:top-0 pointer-events-none">
    <SourceVideo
      className="max-w-none ml-auto w-[calc(100%+50px)] transform translate-x-4 translate-y-2 xs:translate-y-15 xs:w-full md:translate-y-32 md:translate-x-6 md:w-[calc(100%+100px)] lg:w-[95%] xl:w-full xl:translate-y-0 xl:translate-x-50 1xl:translate-x-80 1xl:-translate-y-10"
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
