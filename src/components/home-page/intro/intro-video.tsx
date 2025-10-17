"use client";

import { FC, useEffect, useRef } from "react";

const IntroVideo: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS / Safari detection
    const isSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Browser claims WebM support?
    const canPlayWebM = video.canPlayType('video/webm; codecs="vp9"');

    // Only use WebM if browser supports and it's NOT Safari/iOS
    const useWebM =
      (canPlayWebM === "probably" || canPlayWebM === "maybe") && !isSafari;

    video.src = useWebM
      ? "/video/home-intro.webm"
      : "/video/home-intro-safari.mp4";

    video.load();
    video.play().catch(() => {});
  }, []);

  return (
    <div className="absolute w-full bottom-0 right-0 overflow-hidden pb-[55px] mb-[-55px] xl:h-fit xl:max-w-[1000px] 1xl:max-w-[1500px] xl:top-0">
      <video
        ref={videoRef}
        className="max-w-none ml-auto w-[calc(100%+50px)] transform translate-x-4 translate-y-2 xs:translate-y-15 xs:w-full md:translate-y-32 md:translate-x-6 md:w-[calc(100%+100px)] lg:w-[95%] xl:w-full xl:translate-y-0 xl:translate-x-50 1xl:translate-x-80 1xl:-translate-y-10"
        autoPlay
        playsInline
        muted
        // loop
        preload="metadata"
        poster="/img/home-intro.png"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default IntroVideo;
