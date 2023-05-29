import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { parentPort } from "worker_threads";
import Link from "next/link";
import { ImageProps } from "@/modules/FeaturedSection/FeaturedSection";

interface CommonProps {
  intent: "image" | "link";
  size: "small" | "large";
  image: ImageProps;
  label: string;
}
interface AnchorProps extends CommonProps {
  kind: "link";
  href: string;
  target?: "_blank" | "_self";
}

type TrendingNowProps = AnchorProps;

function TrendingNowCard({ size = "large", image, label, ...props }: TrendingNowProps) {
  if (props.intent === "link") {
    const { kind, href, target, ...rest } = props;
    return (
      <Link href={href} target={target} className="group grid w-full h-full relative overflow-hidden rounded-3xl">
        <Image
          src={image.imageSrc}
          alt={label}
          width={image.imageWidth}
          height={image.imageHeight}
          className={clsx("object-cover object-center rounded-3xl transition-opacity group-hover:opacity-70", size === "small" ? "aspect-square" : "aspect-video")}
        />
        <span className="absolute text-blue style-h3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 self-center justify-self-center">{label}</span>
      </Link>
    );
  } else {
    return (
      <div className="group grid w-full h-full relative overflow-hidden rounded-3xl">
        <Image src={image.imageSrc} alt={label} width={image.imageWidth} height={image.imageHeight} className={clsx("object-cover object-center rounded-3xl", size === "small" ? "aspect-square" : "aspect-video")} />
      </div>
    );
  }
}

export default TrendingNowCard;
