"use client";

import { useEffect, useRef } from "react";

interface Props {
  url: string;
  playbackSpeed?: number;
  onEnded?: () => void;
  autoPlay?: boolean;
}

export default function NameAnimation({
  url,
  playbackSpeed = 1.0,
  onEnded,
  autoPlay = true,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={url}
      autoPlay={autoPlay}
      muted
      playsInline
      onEnded={onEnded}
    />
  );
}
