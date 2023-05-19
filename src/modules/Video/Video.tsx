import React, { useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Vimeo from "@u-wave/react-vimeo";

type Thumbnail = {
  imageSrc: string;
  alt?: string;
};

interface VideoProps {
  title?: string;
  videoSrc: string;
  videoThumbnail?: Thumbnail;
}

// @ts-ignore
const VimeoPlayer = Vimeo.hasOwnProperty("default") ? Vimeo.default : Vimeo;

function Video({ title, videoSrc, videoThumbnail }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState(false);
  function playVideo() {
    setShowControls(true);
    videoRef.current?.play();
  }
  return (
    <section className="text-blue">
      {title ? (
        <div>
          <h2 className="style-h3 uppercase mb-5">{title}</h2>
        </div>
      ) : null}

      <div className="flex flex-col">
        <div className="relative h-full w-full">
          <div className="aspect-w-16 aspect-h-9">
            <VimeoPlayer video={videoSrc} showByline={false} showPortrait={false} showTitle={false} responsive paused={!showControls} dnt className={"object-cover"} />
          </div>

          {videoThumbnail && !showControls ? <Image src={videoThumbnail.imageSrc} fill className="object-cover aspect-video" alt={videoThumbnail.alt ? videoThumbnail.alt : ""} /> : null}

          {videoThumbnail && !showControls ? (
            <div className={clsx("absolute inset-0 flex w-full items-center justify-center", showControls ? "hidden" : null)}>
              <button type="button" onClick={playVideo} className="bg-white text-blue p-4 rounded-full content-center hover:bg-blue hover:text-white">
                <svg width="23" height="23" viewBox="0 0 19 23" fill="none">
                  <path d="M2 2V20.67L16.6693 11.335L2 2Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Video;
