"use client";

import { ForwardedRef, forwardRef, useEffect, useRef } from "react";

interface Props {
  url: string;
  playbackSpeed?: number;
  onEnded?: () => void;
  autoPlay?: boolean;
  className?: string;
}

const AnimationPlayer = forwardRef(function AnimationPlayer(
  { url, playbackSpeed = 1.0, onEnded, autoPlay = true, className }: Props,
  ref: ForwardedRef<HTMLVideoElement>
) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!ref || !videoRef.current) return;

    if (typeof ref === "function") {
      ref(videoRef.current);
    } else {
      (ref as React.RefObject<HTMLVideoElement>).current = videoRef.current;
    }
  }, [ref]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, []);

  return (
    <video
      className={className}
      ref={videoRef}
      src={url}
      autoPlay={autoPlay}
      muted
      playsInline
      onEnded={onEnded}
    />
  );
});

export default AnimationPlayer;
