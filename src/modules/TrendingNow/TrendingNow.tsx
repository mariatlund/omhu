import TrendingNowCard from "@/components/Cards/TrendingNowCard";
import React from "react";
import img1 from "../../assets/Teddy_and_Astrid.jpg";

function TrendingNow() {
  return (
    <section className="container">
      <h2 className="style-h1">Trending now</h2>
      <TrendingNowCard intent="link" size="large" src={img1} kind="link" href="/shop" target="_self" label="" />
      <TrendingNowCard intent="link" size="small" src={img1} kind="link" href="/shop" target="_self" label="" />
    </section>
  );
}

export default TrendingNow;
