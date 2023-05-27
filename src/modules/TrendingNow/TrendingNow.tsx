import TrendingNowCard from "../../components/Cards/TrendingNowCard";
import React from "react";
import yellow1 from "../../assets/trendingnow/yellow1.jpg";
import yellow2 from "../../assets/trendingnow/yellow2.jpg";
import brown1 from "../../assets/trendingnow/brown1.jpg";
import brown2 from "../../assets/trendingnow/brown2.jpg";

import { ImageProps } from "@/modules/FeaturedSection/FeaturedSection";

const image1: ImageProps = {
  imageSrc: yellow1,
  imageWidth: 973,
  imageHeight: 1216,
};

const image2: ImageProps = {
  imageSrc: yellow2,
  imageWidth: 973,
  imageHeight: 1216,
};

const image3: ImageProps = {
  imageSrc: brown1,
  imageWidth: 973,
  imageHeight: 1215,
};

const image4: ImageProps = {
  imageSrc: brown2,
  imageWidth: 973,
  imageHeight: 1215,
};

function TrendingNow() {
  return (
    <section className="container">
      <h2 className="style-h1 mb-5">Trending now</h2>
      <div className="grid gap-5 md:grid-cols-2 md:gap-10">
        <div className="grid gap-5 md:gap-10">
          <TrendingNowCard intent="link" size="large" image={image1} kind="link" href="/products/4" target="_self" label="Teddy sofa &#8594;" />
          <TrendingNowCard intent="link" size="small" image={image3} kind="link" href="/products/4" target="_self" label="Teddy sofa &#8594;" />
        </div>
        <div className="grid gap-5 md:gap-10">
          <TrendingNowCard intent="link" size="small" image={image2} kind="link" href="/products/4" target="_self" label="Teddy sofa &#8594;" />
          <TrendingNowCard intent="link" size="large" image={image4} kind="link" href="/products/4" target="_self" label="Teddy sofa &#8594;" />
        </div>
      </div>
    </section>
  );
}

export default TrendingNow;
