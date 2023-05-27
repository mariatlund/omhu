import FeaturedSection, { ImageProps } from "@/modules/FeaturedSection/FeaturedSection";
import HeroSection from "@/modules/HeroSection/HeroSection";
import IGfeed from "@/modules/IGfeed/IGfeed";
import TrendingNow from "@/modules/TrendingNow/TrendingNow";
import React from "react";
import showroomPic from "../assets/showroom.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your home, with omhu. | OMHU",
  keywords: ["Sofa", "Furniture", "Decor", "Furniture design", "Retro furniture", "Teddy"],
  description: "Explore our retro-inspired furniture and popular Teddy sofa.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "../assets/favicon.png",
  },
};

const meetOmhuImg: ImageProps = {
  imageSrc: "https://images.unsplash.com/photo-1520722359162-8ead33ae9ba4",
  imageWidth: 774,
  imageHeight: 1161,
};

const showroomImg: ImageProps = {
  imageSrc: showroomPic,
  imageWidth: 865,
  imageHeight: 620,
};

function Home() {
  return (
    <>
      <HeroSection />
      <div className="space-y-10 mt-10 md:space-y-20 md:mt-20">
        <TrendingNow />
        <FeaturedSection
          bgColour="blue"
          image={meetOmhuImg}
          buttonLabel="Read more"
          buttonLink="/about"
          title="Meet OMHU"
          description="Curious about who OMHU is? Come meet Jonas and Frederik and read about how they went from selling vintage decor from a tiny basement to creating their own furniture company."
        />
        <IGfeed />
        <FeaturedSection
          bgColour="white"
          image={showroomImg}
          buttonLabel="Book a time"
          buttonLink="/showroom"
          title="Showroom"
          description="Come meet us at one of our showrooms in Denmark and experience our furniture first hand. Here you can find colour and fabric samples and find the right fit for you. Ready for a TEDDY bear hug?"
        />
      </div>
    </>
  );
}

export default Home;
