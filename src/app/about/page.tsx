import React from "react";
import AboutHero from "@/modules/AboutHero/AboutHero";
import AboutTimeline from "@/modules/AboutTimeline/AboutTimeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  keywords: ["About us", "Furniture company", "Vintage furniture", "Furniture design", "Retro furniture", "Teddy", "Omhu"],
  description: "Your home, with omhu.",
};

function about() {
  return (
    <>
      <div className="pt-10 lg:pt-20">
        <AboutHero />
      </div>
      <div className="mr-5 lg:mr-0">
        <AboutTimeline />
      </div>
    </>
  );
}

export default about;
