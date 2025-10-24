import { FC } from "react";

import SourceVideo from "@/components/shared/source-video";

const IntroVideo: FC = () => (
  <div className="absolute w-full bottom-0 right-0 overflow-hidden pb-25 -mb-25 xl:w-325 h-fit pointer-events-none">
    <SourceVideo
      className="max-w-none ml-auto w-full translate-x-10 translate-y-10 xs:w-120A transform xs:translate-y-14 md:translate-y-24 md:translate-x-6 md:w-225 lg:w-250 lg:translate-x-20 xl:translate-y-25 xl:translate-x-35 1xl:w-375 1xl:translate-x-16 max-h-[110vh]"
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
