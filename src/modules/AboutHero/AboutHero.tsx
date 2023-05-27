import Link from "next/link";
import React from "react";

const svg1 = (
  <svg id="Layer_1" viewBox="0 0 596.65 119.08" fill="currentColor">
    <rect className="cls-1" x="579.64" width="17.01" height="119.08" />
    <rect className="cls-1" x="545.62" width="17.01" height="119.08" />
    <rect className="cls-1" x="511.59" width="17.01" height="119.08" />
    <polygon className="cls-1" points="0 17.01 205.86 17.01 212.65 17.01 467.83 17.01 467.83 0 212.65 0 205.86 0 0 0 0 17.01" />
    <polygon className="cls-1" points="0 51.04 205.86 51.04 212.65 51.04 467.83 51.04 467.83 34.02 212.65 34.02 205.86 34.02 0 34.02 0 51.04" />
    <polygon className="cls-1" points="0 85.06 205.86 85.06 212.65 85.06 467.83 85.06 467.83 68.05 212.65 68.05 205.86 68.05 0 68.05 0 85.06" />
    <polygon className="cls-1" points="0 119.08 205.86 119.08 212.65 119.08 467.83 119.08 467.83 102.07 212.65 102.07 205.86 102.07 0 102.07 0 119.08" />
  </svg>
);

const svg2 = (
  <svg id="Layer_2" viewBox="0 0 424.73 321.85" fill="currentColor">
    <path
      className="cls-1"
      d="m76.09,114.07c-5.43,13.76-8.14,29.38-8.14,46.84v.02h0s0,.01,0,.02c0,17.46,2.71,33.07,8.14,46.83,5.43,13.76,14.04,24.89,25.84,33.38,11.8,8.49,25.95,12.74,42.47,12.74h280.34v-16.99H144.39c-19.98,0-34.88-7.04-44.71-21.12-9.83-14.08-14.74-32.36-14.74-54.85,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0-22.49,4.92-40.78,14.74-54.86,9.83-14.08,24.73-21.12,44.71-21.12h280.34v-16.99H144.39c-16.52,0-30.67,4.25-42.47,12.74-11.8,8.49-20.41,19.62-25.84,33.38Z"
    />
    <path
      className="cls-1"
      d="m62.88,71.25c-9.2,11.48-16.32,24.93-21.35,40.35-5.03,15.41-7.55,31.85-7.55,49.31v.02h0s0,.01,0,.02c0,17.46,2.52,33.89,7.55,49.31,5.03,15.41,12.15,28.86,21.35,40.34,9.2,11.48,20.8,20.57,34.8,27.25,14,6.69,29.57,10.02,46.72,10.02h280.34v-16.99H144.39c-14.78,0-28.15-2.87-40.11-8.61-11.96-5.74-21.78-13.64-29.49-23.71-7.71-10.06-13.61-21.71-17.7-34.92-4.09-13.21-6.13-27.45-6.13-42.7v-.04c0-15.26,2.05-29.49,6.13-42.71,4.09-13.21,9.99-24.85,17.7-34.92,7.71-10.07,17.54-17.97,29.49-23.71,11.96-5.74,25.33-8.61,40.11-8.61h280.34v-16.99H144.39c-17.14,0-32.72,3.34-46.72,10.03-14,6.69-25.6,15.77-34.8,27.25Z"
    />
    <path
      className="cls-1"
      d="m101.92,160.91s0,.01,0,.02c0,0,0,.01,0,.02,0,39.32,14.16,58.98,42.47,58.98h280.34v-16.99H144.39c-4.56,0-8.45-.75-11.68-2.24-3.22-1.5-5.7-3.42-7.43-5.78-1.73-2.36-3.11-5.46-4.13-9.32-1.02-3.85-1.65-7.59-1.89-11.21-.23-3.62-.35-8.1-.35-13.45v-.04c0-5.35.12-9.83.35-13.45.24-3.62.87-7.35,1.89-11.21,1.02-3.85,2.4-6.96,4.13-9.32,1.73-2.36,4.21-4.29,7.43-5.78,3.22-1.5,7.12-2.24,11.68-2.24h280.34v-16.99H144.39c-28.31,0-42.47,19.66-42.47,58.98Z"
    />
    <path
      className="cls-1"
      d="m424.73,304.87H144.39c-25.8,0-48.49-6.53-68.07-19.58-19.58-13.06-34.37-30.4-44.35-52.02-9.99-21.63-14.98-45.73-14.98-72.31,0,0,0-.01,0-.02s0-.01,0-.02c0-26.58,4.99-50.69,14.98-72.32,9.99-21.63,24.77-38.97,44.35-52.02,19.58-13.06,42.27-19.58,68.07-19.58h280.34V0H144.39c-21.71,0-41.68,4.25-59.93,12.74-18.25,8.49-33.5,20.01-45.77,34.56-12.27,14.55-21.78,31.62-28.55,51.2C3.38,118.09,0,138.89,0,160.91v.04c0,22.02,3.38,42.82,10.15,62.4,6.76,19.58,16.28,36.65,28.55,51.2,12.27,14.55,27.53,26.07,45.77,34.57,18.25,8.49,38.22,12.74,59.93,12.74h280.34v-16.99Z"
    />
  </svg>
);

function AboutHero() {
  return (
    <section className="text-blue relative overflow-hidden">
      <div className="absolute w-full h-full overflow-hidden flex">
        <div className="grid place-items-start w-full">
          <div className="w-1/2">{svg1}</div>
        </div>
        <div className="grid place-items-end w-full">
          <div className="w-1/2 md:1/3">{svg2}</div>
        </div>
      </div>

      <div className="relative grid text-center justify-items-center space-y-5 py-10 md:py-40">
        <h1 className="style-h1">Who is OMHU?</h1>
        <span className="style-body">Here&apos;s our story</span>
        <Link href="#about" className="hover:text-link p-2">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default AboutHero;
