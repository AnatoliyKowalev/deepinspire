"use client";

import { FC } from "react";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { VideoModalProps } from "./interfaces";

const YoutubeModal: FC<VideoModalProps> = ({ url, onClose }) => (
  <Dialog onOpenChange={onClose} open>
    <DialogTitle className="none">Video</DialogTitle>
    <DialogContent className="!max-w-375 p-0 bg-black/1 border-0 rounded-none flex items-center justify-center shadow-none w-[calc(100vw_-_88px)]">
      <div
        className="relative w-full aspect-video"
        style={{
          zIndex: 3,
        }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src={`${url}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </DialogContent>
  </Dialog>
);

export default YoutubeModal;
