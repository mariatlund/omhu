import React from "react";
import Head from "next/head";
import { Layout } from "@/app/pageLayout";
import AboutHero from "@/modules/AboutHero/AboutHero";
import AboutTimeline from "@/modules/AboutTimeline/AboutTimeline";

function about() {
  return (
    <Layout>
      <div className="pt-10 lg:pt-20">
        <AboutHero />
      </div>
      <div className="mr-5 lg:mr-0">
        <AboutTimeline />
      </div>
    </Layout>
  );
}

export default about;
