import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { parentPort } from "worker_threads";

interface CommonProps {
  intent: "image" | "link";
  size: "small" | "large";
  src: string | StaticImageData;
  label: string;
}
interface AnchorProps extends CommonProps {
  kind: "link";
  href: string;
  target?: "_blank" | "_self";
}

//this card can be used for the trending now section and the product list it can be small or large
//in the trending now section it should be hoverable with a link to the product
//in the product list it should be a static image with no link
const widthL = 700;
const heightL = 350;
const widthS = 350;
const heightS = 350;
//for tailwind
const large = `w-[700px] h-[350px]`;
const small = `w-[350px] h-[350px]`;

type TrendingNowProps = AnchorProps;

function TrendingNowCard({ size = "large", src, label, ...props }: TrendingNowProps) {
  if (props.intent === "link") {
    const { kind, href, target, ...rest } = props;
    return (
      <a href={href} target={target}>
        <div className={(clsx(size === "large" ? large : small), "group relative flex flex-col items-center justify-center")}>
          <Image src={src} alt={label} width={size === "large" ? widthL : widthS} height={size === "large" ? heightL : heightS} className="rounded-3xl transition-opacity group-hover:opacity-70 object-cover" />
          <span className="absolute text-blue style-body opacity-0 transition-opacity duration-300 group-hover:opacity-100">{label}</span>
        </div>
      </a>
    );
  } else {
    return (
      <div className={(clsx(size === "large" ? large : small), "relative")}>
        <Image src={src} alt={label} width={size === "large" ? widthL : widthS} height={size === "large" ? heightL : heightS} className="rounded-3xl object-cover" />
      </div>
    );
  }
}

export default TrendingNowCard;
