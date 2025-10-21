"use client";

import React, { FC, useCallback, useState } from "react";

import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { YoutubeModal } from "@/components/shared/modals";

import { VideoBlockProps } from "./interfaces";

import { cn } from "@/lib/utils";

const VideoBlock: FC<VideoBlockProps> = ({
  title,
  name,
  desc,
  video,
  youtube,
  preload,
  reverse = false,
}) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const onClose = useCallback(() => setVideoUrl(null), []);

  return (
    <div
      className={cn(
        `grid overflow-hidden relative after:content-[''] after:bg-dark-texting/70 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:pointer-events-none after:z-1 text-light-texting [&>*]:z-2 py-19.5 pr-[15px] pl-11.25 xs:pr-7.5 xs:pl-15 md:pt-11 md:pb-16.5 md:px-17.25 md:after:inset-0 md:after:bg-transparent xl:pt-25 xl:pb-44.5 lg:pt-22.5 lg:pb-30.5
        ${reverse ? "place-content-end md:pr-9.75 md:after:translate-x-[5%] md:after:bg-[linear-gradient(to_left,var(--color-dark-texting)_-10%,transparent_100%)] lg:pr-12.75 xl:pr-23.75" : "md:after:-translate-x-[5%] md:after:bg-[linear-gradient(to_right,var(--color-dark-texting)_-10%,transparent_100%)] lg:pl-27.75 xl:pl-23.75"}`
      )}
    >
      <div className="text-lg/normal font-medium mb-3.75 relative xs:text-2xl md:w-90 md:text-[28px] lg:text-[28px] lg:leading-normal">
        {title}
        <Icon
          className="text-xs text-accent-primary absolute -left-3 -top-3 transform -translate-x-full -translate-y-full"
          icon="quote-left"
        />
      </div>
      <div className="text-lg/normal mb-[5px] xs:text-2xl">{name}</div>
      <div className="text-base whitespace-pre-line">{desc}</div>
      <Button
        onClick={() => setVideoUrl(youtube)}
        className="w-fit h-fit p-0 mt-7.5 font-normal gap-3.75 group"
      >
        <div className="w-11 h-11 rounded-full bg-accent-primary flex items-center justify-center transform duration-300 group-hover:scale-[0.9]">
          <Icon className="text-2xl text-white" icon="play" />
        </div>
        Watch video
      </Button>
      <video
        preload="auto"
        poster={preload}
        className="h-full md:w-full object-cover absolute left-0 top-0 !z-0"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {videoUrl ? <YoutubeModal url={videoUrl} onClose={onClose} /> : null}
    </div>
  );
};

export default VideoBlock;
