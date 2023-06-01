import TimelineCard from "./TimelineCard";
import React from "react";
import teddyImg from "../../assets/about/teddy.jpg";
import vintageImg from "../../assets/about/vintage.jpg";
import kkImage from "../../assets/about/k_and_k.jpg";
import omhuImg from "../../assets/about/omhu.jpg";

const bulletPoints = [
  {
    year: "2018",
    title: "Passion for vintage",
    description: "OMHU is the product of a 30-year friendship between Jonas and Frederik - two Danish guys with a shared passion for retro furniture. It started with an idea to collect and sell vintage decor online, and it all took off from there.",
    image: {
      imageSrc: vintageImg,
      imageHeight: 1222,
      imageWidth: 1222,
    },
  },
  {
    year: "2019",
    title: "Kram & klenodier",
    description:
      "We started small, with just a used van and a few ads on DBA, but before we knew it our little Instagram-based vintage shop 'Kram & Klenodier' was up and running in 2018. Throughout 2019 we sold our vintage furniture finds through Instagram, the popularity  of our account growing every month. Today the account has over 17,5k followers.",
    image: {
      imageSrc: kkImage,
      imageHeight: 1080,
      imageWidth: 1079,
    },
  },
  {
    year: "2022",
    title: "Teddy",
    description:
      "During the spring of 2022, the idea for our own product was born. We created a sofabed inspired by a retro sofa we had sold, with the idea of making it stylish but also truly comfortable in both its states. We felt that so many other sofabeds were only good either for sleeping or sitting in. We didn't want to do it halfway - we wanted TEDDY to be comfy in all scenarios.",
    image: {
      imageSrc: teddyImg,
      imageHeight: 1222,
      imageWidth: 977,
    },
  },
  {
    year: "2023",
    title: "OMHU",
    description:
      "Following the incredibly positive response to TEDDY, in 2023 we decided to expand and create our brand, OMHU. Here, we want to develop and release even more furniture and decor items with that colourful, retro vibe we love so much.",
    image: {
      imageSrc: omhuImg,
      imageHeight: 1111,
      imageWidth: 1111,
    },
  },
  {
    year: "2023",
    title: "What's next?",
    description: "That was our story - the journey that led us to where we are today. Join us on this exciting journey, as there's so much more to come. Stay tuned for all the latest news and updates from OMHU.",
  },
];

const timelinePhone = (
  <svg viewBox="0 0 50 6000" fill="none">
    <path d="M27.0879 6000.01V91.5C27.0879 25.5 27.0879 21.5 0.5 21.5" stroke="currentColor" stroke-width="5" />
    <path d="M47.0879 6000V63.3512C47.0879 18.2341 39 2.5 0 2.5" stroke="currentColor" stroke-width="5" />
    <path d="M8.08789 6000L8.08789 65.2215C8.08789 46 8.08789 42.6484 1 42.6484" stroke="currentColor" stroke-width="5" />
  </svg>
);

const timelineDesktop = (
  <svg id="Layer_3" viewBox="0 0 240 1756" fill="none" stroke="currentColor" strokeWidth="6px">
    <path className="cls-1" d="m-.07,1.49h155.71c45.73,0,82.8,37.06,82.82,82.79l.56,1671.74" />
    <path className="cls-1" d="m-.05,24.99h153.46c33.52,0,60.69,27.16,60.7,60.68l.57,1670.2" />
    <path className="cls-1" d="m-.03,48.49h151.2c21.31,0,38.58,17.27,38.59,38.57l.58,1668.66" />
  </svg>
);

function AboutTimeline() {
  return (
    <section id="about" className="text-blue relative overflow-hidden grid grid-cols-12">
      <div className="relative w-full h-full overflow-hidden flex col-span-1 2xl:hidden">
        <div className="absolute grid place-items-start w-full">
          <div className="w-full">{timelinePhone}</div>
        </div>
      </div>
      <div className="relative hidden w-full h-full overflow-hidden col-span-3 2xl:flex">
        <div className="absolute grid place-items-start w-full">
          <div className="w-full">{timelineDesktop}</div>
        </div>
      </div>

      <div className="grid space-y-10 pt-12 ml-[-3px] max-w-[1100px] col-span-11 md:pt-24 md:space-y-20 2xl:col-span-8 2xl:ml-0 2xl:pt-52 pb-20 2xl:pb-40">
        {bulletPoints.map((item, index) => {
          return <TimelineCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

export default AboutTimeline;
