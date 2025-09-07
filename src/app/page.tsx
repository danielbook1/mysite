"use client";

import NameAnimation from "@/components/NameAnimation";

export default function Home() {
  return (
    <div className="flex">
      <NameAnimation url="/res/daniel.mp4" playbackSpeed={1.5} />

      <NameAnimation url="/res/book.mp4" playbackSpeed={1.5} autoPlay={false} />
    </div>
  );
}
