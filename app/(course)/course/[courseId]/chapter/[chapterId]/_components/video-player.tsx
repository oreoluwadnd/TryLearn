import { AspectRatio } from "@/components/ui/aspect-ratio";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VideoControl from "./video-control";
import { SourceProps } from "react-player/base";

type VideoPlayerProps = {
  url?: string | string[] | SourceProps[] | MediaStream | undefined;
};

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <AspectRatio ratio={16 / 9}>
      <ReactPlayer
        controls
        className="player"
        url={url}
        width="100%"
        height="100%"
      />
    </AspectRatio>
  );
}
