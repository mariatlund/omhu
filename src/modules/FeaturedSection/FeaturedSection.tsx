import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Button from "../../components/Button/Button";

const bluePhoneSVG = (
  <svg id="Layer_1" viewBox="0 0 590 160" fill="currentColor" className="inset-0 w-52 md:w-full">
    <path
      className="cls-1"
      d="m21.81,340.83v-155.5c0-33.11,8.38-62.23,25.13-87.36,16.75-25.14,39.01-44.11,66.77-56.93,27.76-12.82,58.7-19.23,92.82-19.23,24.83,0,48.65,4.34,71.47,13.02,22.81,8.68,42.49,20.34,59.05,34.98,16.56,14.63,29.73,32.05,39.52,52.23,9.79,20.19,14.69,41.28,14.69,63.29v155.5h21.8v-155.5c0-5.85.96-10.85,2.88-14.99,1.92-4.14,4.39-7.32,7.42-9.54,3.03-2.22,7.02-3.99,11.96-5.3,4.94-1.31,9.74-2.12,14.38-2.42,4.65-.3,10.4-.45,17.26-.45s12.62.15,17.26.45c4.65.3,9.44,1.11,14.39,2.42,4.94,1.31,8.93,3.08,11.96,5.3,3.03,2.22,5.5,5.4,7.42,9.54,1.92,4.14,2.88,9.14,2.88,14.99v155.5h21.8v-155.5c0-36.34-25.23-54.51-75.7-54.51-25.84,0-45.12,4.84-57.84,14.53-1.41-6.86-3.43-14.13-6.06-21.81,16.35-9.69,37.65-14.53,63.9-14.53,28.87,0,52.34,6.31,70.41,18.93,18.07,12.61,27.1,31.75,27.1,57.38v155.5h21.8v-155.5c0-21.2-5.45-39.36-16.35-54.51-10.9-15.14-25.19-26.2-42.85-33.16-17.67-6.97-37.7-10.45-60.11-10.45-28.47,0-52.59,5.55-72.37,16.65-3.64-6.86-7.27-13.12-10.9-18.77,23.42-13.13,51.18-19.69,83.27-19.69,19.58,0,37.85,2.63,54.81,7.87,16.96,5.25,31.89,12.82,44.82,22.71,12.92,9.89,23.07,22.51,30.43,37.85,7.37,15.34,11.05,32.5,11.05,51.48v155.5h21.8v-155.5c0-22-4.29-41.99-12.87-59.96-8.58-17.97-20.24-32.86-34.97-44.67-14.74-11.81-32-20.94-51.78-27.4-19.78-6.46-40.88-9.69-63.29-9.69-36.74,0-68.94,8.07-96.6,24.22-5.65-6.46-10.8-11.71-15.44-15.74,31.9-20.19,69.25-30.28,112.04-30.28,34.12,0,65.06,6.46,92.82,19.38,27.76,12.92,50.02,31.95,66.77,57.08,16.76,25.14,25.14,54.15,25.14,87.06v155.5h21.8v-155.5c0-27.86-5.45-53.5-16.35-76.92-10.9-23.42-25.69-43-44.36-58.74-18.67-15.75-40.58-27.96-65.71-36.64S495.21,0,466.95,0c-50.06,0-93.47,12.62-130.21,37.85C300,12.62,256.59,0,206.52,0c-28.26,0-54.96,4.34-80.1,13.02-25.13,8.68-47.04,20.9-65.71,36.64-18.67,15.74-33.46,35.33-44.36,58.74C5.45,131.83,0,157.47,0,185.33v155.5h21.81Z"
    />
    <path
      className="cls-1"
      d="m65.41,340.83v-155.5c0-18.98,3.69-36.14,11.05-51.48,7.37-15.34,17.51-27.96,30.43-37.85,12.92-9.89,27.86-17.46,44.82-22.71,16.96-5.25,35.23-7.87,54.81-7.87s37.85,2.63,54.81,7.87c16.96,5.25,31.9,12.82,44.82,22.71,12.92,9.89,23.06,22.51,30.43,37.85,7.37,15.34,11.05,32.5,11.05,51.48v155.5h21.81v-155.5c0-22-4.29-41.99-12.87-59.96-8.58-17.97-20.24-32.86-34.98-44.67-14.73-11.81-32-20.94-51.78-27.4-19.79-6.46-40.88-9.69-63.29-9.69s-43.51,3.23-63.29,9.69c-19.79,6.46-37.05,15.6-51.78,27.4-14.74,11.81-26.39,26.7-34.97,44.67-8.58,17.97-12.87,37.95-12.87,59.96v155.5h21.8Z"
    />
    <path
      className="cls-1"
      d="m109.01,340.83v-155.5c0-25.64,9.03-44.77,27.1-57.38,18.07-12.62,41.54-18.93,70.4-18.93s52.34,6.31,70.4,18.93c18.07,12.61,27.1,31.75,27.1,57.38v155.5h21.81v-155.5c0-21.2-5.45-39.36-16.35-54.51-10.9-15.14-25.18-26.2-42.85-33.16-17.66-6.97-37.7-10.45-60.11-10.45s-42.45,3.48-60.11,10.45c-17.66,6.96-31.95,18.02-42.85,33.16-10.9,15.14-16.35,33.31-16.35,54.51v155.5h21.8Z"
    />
    <path
      className="cls-1"
      d="m152.62,340.83v-155.5c0-5.85.96-10.85,2.88-14.99,1.92-4.14,4.39-7.32,7.42-9.54,3.03-2.22,7.02-3.99,11.96-5.3,4.95-1.31,9.74-2.12,14.39-2.42,4.64-.3,10.4-.45,17.26-.45s12.62.15,17.26.45c4.65.3,9.44,1.11,14.38,2.42,4.95,1.31,8.94,3.08,11.96,5.3,3.03,2.22,5.5,5.4,7.42,9.54,1.92,4.14,2.88,9.14,2.88,14.99v155.5h21.8v-155.5c0-36.34-25.23-54.51-75.7-54.51s-75.7,18.17-75.7,54.51v155.5h21.8Z"
    />
  </svg>
);

const blueDesktopSVG = (
  <svg id="Layer_1" viewBox="0 0 119.08 596.65" fill="currentColor">
    <rect className="cls-1" y="579.64" width="119.08" height="17.01" />
    <rect className="cls-1" y="545.62" width="119.08" height="17.01" />
    <rect className="cls-1" y="511.59" width="119.08" height="17.01" />
    <polygon className="cls-1" points="102.07 0 102.07 205.86 102.07 212.65 102.07 467.83 119.08 467.83 119.08 212.65 119.08 205.86 119.08 0 102.07 0" />
    <polygon className="cls-1" points="68.05 0 68.05 205.86 68.05 212.65 68.05 467.83 85.06 467.83 85.06 212.65 85.06 205.86 85.06 0 68.05 0" />
    <polygon className="cls-1" points="34.02 0 34.02 205.86 34.02 212.65 34.02 467.83 51.04 467.83 51.04 212.65 51.04 205.86 51.04 0 34.02 0" />
    <polygon className="cls-1" points="0 0 0 205.86 0 212.65 0 467.83 17.01 467.83 17.01 212.65 17.01 205.86 17.01 0 0 0" />
  </svg>
);

const whitePhoneSVG = (
  <svg id="Layer_1" viewBox="0 0 173.31 766.96" fill="currentColor" className="inset-0 w-full">
    <rect className="cls-1" x="57.32" y="750.39" width="115.99" height="16.57" />
    <rect className="cls-1" x="57.32" y="717.25" width="115.99" height="16.57" />
    <rect className="cls-1" x="57.32" y="684.11" width="115.99" height="16.57" />
    <path
      className="cls-1"
      d="m62.04,74.22c-13.43-5.3-28.65-7.94-45.68-7.94-5.68,0-11.13.3-16.35.88v16.62c5.14-.62,10.59-.93,16.35-.93,21.94,0,39.78,4.79,53.51,14.38,13.73,9.59,20.6,24.13,20.6,43.61v455.66h16.57V140.84c0-16.11-4.14-29.92-12.43-41.42-8.29-11.51-19.14-19.91-32.56-25.2Z"
    />
    <path
      className="cls-1"
      d="m16.35,99.42c-5.91,0-11.35.34-16.35,1.01v16.23c1.09-.14,2.17-.26,3.24-.33,3.53-.23,7.9-.35,13.12-.35s9.59.12,13.12.35c3.53.23,7.17.84,10.93,1.84,3.76,1,6.79,2.34,9.09,4.03,2.3,1.69,4.18,4.1,5.64,7.25,1.46,3.15,2.19,6.94,2.19,11.39v455.66h16.57V140.84c0-27.62-19.18-41.42-57.53-41.42Z"
    />
    <path
      className="cls-1"
      d="m160.88,82.39c-8.28-17.8-19.52-32.68-33.71-44.64-14.19-11.97-30.84-21.25-49.94-27.85C58.13,3.3,37.83,0,16.35,0,10.79,0,5.34.21,0,.62v16.63c5.33-.45,10.78-.68,16.35-.68,25.93,0,49.44,4.91,70.54,14.73,21.09,9.82,38.01,24.28,50.74,43.38,12.73,19.1,19.1,41.16,19.1,66.16v455.66h16.57V140.84c0-21.17-4.14-40.66-12.43-58.45Z"
    />
    <path
      className="cls-1"
      d="m103.81,61.33c-11.2-8.97-24.32-15.92-39.35-20.83-15.03-4.91-31.07-7.36-48.1-7.36-5.59,0-11.04.26-16.35.75v16.63c5.28-.53,10.72-.81,16.35-.81,14.88,0,28.77,2,41.66,5.98,12.89,3.99,24.24,9.74,34.06,17.26,9.82,7.52,17.53,17.11,23.13,28.77,5.6,11.66,8.4,24.7,8.4,39.12v455.66h16.57V140.84c0-16.72-3.26-31.91-9.78-45.57-6.52-13.66-15.38-24.97-26.58-33.95Z"
    />
  </svg>
);

export interface ImageProps {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

interface FeaturedSectionProps {
  bgColour: "blue" | "white";
  image: ImageProps;
  title?: string;
  description?: string;
  buttonLabel: string;
  buttonLink: string;
}

function FeaturedSection({ bgColour, image, title, description, buttonLabel, buttonLink }: FeaturedSectionProps) {
  return (
    <section className={clsx(bgColour === "blue" ? "bg-blue text-white" : "bg-white text-blue", "relative py-10")}>
      <div className="container z-1">
        <Image src={image.imageSrc} alt="" width={image.imageWidth} height={image.imageHeight} className="aspect-square object-cover" />
        <div className="mt-5">
          <h2 className="style-h3 uppercase md:style-h2">{title}</h2>
          <p className="style-body-small md:style-body mt-1.5">{description}</p>
          <Button intent={bgColour === "blue" ? "alternative" : "primary"} size="small" label={buttonLabel} kind="link" href={buttonLink} icon="arrow" containerClass="mt-5 mb-10" />
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full overflow-hidden flex">
        {bgColour === "blue" ? (
          <>
            <div className="grid place-items-end w-full z-0">{bluePhoneSVG}</div>
          </>
        ) : null}
      </div>
    </section>
  );
}

export default FeaturedSection;
