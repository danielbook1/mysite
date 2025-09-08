"use client";

import AnimationPlayer from "@/components/AnimationPlayer";
import { useRef } from "react";

export default function NameAnimation() {
  const secondVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="grid grid-cols-2 gap-4 justify-center max-w-6xl w-full mx-auto">
      <AnimationPlayer
        url="/res/daniel.mp4"
        playbackSpeed={2.25}
        onEnded={() => secondVideoRef.current?.play()}
      />

      <AnimationPlayer
        ref={secondVideoRef}
        url="/res/book.mp4"
        playbackSpeed={2.25}
        autoPlay={false}
      />
    </div>
  );
}
