import { StaticImageData } from "next/image";

export type ImagesType = {
  imageSrc: string | StaticImageData;
  imageWidth: number;
  imageHeight: number;
  alt: string;
};
