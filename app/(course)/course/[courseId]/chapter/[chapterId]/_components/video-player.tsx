import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
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
    <div className="animate-pulse aspect-video bg-gray-600" />;
  }
  return (
    <AspectRatio suppressHydrationWarning={true} ratio={16 / 9}>
      <ReactPlayer
        controls
        className="player"
        url={url}
        alt="video"
        width="100%"
        height="100%"
      />
    </AspectRatio>
  );
}
