import { ImageProps } from "@/modules/FeaturedSection/FeaturedSection";
import Image from "next/image";
import React from "react";

const bulletSvg = (
  <svg id="Layer_3" viewBox="0 0 33 66" fill="currentColor">
    <path className="cls-1" d="m0,66c18.23,0,33-14.77,33-33S18.23,0,0,0v66Z" />
  </svg>
);

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  image?: ImageProps;
}

function TimelineCard({ year, title, description, image }: TimelineCardProps) {
  return (
    <article className="text-blue relative overflow-hidden grid grid-cols-12 md:gap-4">
      <div className="w-full h-full overflow-hidden flex col-span-1">
        <div className="grid place-items-start w-full max-w-[60px]">
          <div className="w-full">{bulletSvg}</div>
        </div>
      </div>

      <div className="relative grid space-y-5 col-span-10 col-start-3 md:col-span-11 md:col-start-2 md:grid-cols-2 md:gap-x-10 xl:gap-x-20 md:pt-5">
        <div className="flex flex-col gap-y-1.5 md:gap-y-4">
          <span className="style-body">{year}</span>
          <h2 className="style-h3 uppercase">{title}</h2>
          <p className="style-body-small">{description}</p>
        </div>
        {image ? (
          <div className="rounded-3xl overflow-hidden max-w-[500px] aspect-[4/3] object-center">
            <Image src={image.imageSrc} alt={title} height={image.imageHeight} width={image.imageWidth} className="object-cover object-center aspect-[4/3] w-full " />
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default TimelineCard;
