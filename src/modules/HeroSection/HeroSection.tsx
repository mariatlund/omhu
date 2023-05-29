import Image from "next/image";
import Button from "../../components/Button/Button";
import React from "react";

// const heroImage = "https://amorea.dk/exam/finalExam/teddy_hero.jpg";
//trying with different image
const heroImage = "https://i.imgur.com/UCcZNWP.jpeg";
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute z-40 w-full flex flex-col bottom-10 px-6 md:flex-row md:justify-between xl:px-[5rem]">
        <h1 className="text-40 font-extrabold leading-tight lg:text-64 text-white font-headline uppercase hidden w-1/2 md:block">Ready for a bear hug?</h1>
        <div className="self-end">
          <Button kind="link" label="Check out Teddy" intent="alternative" size="large" href="/shop" icon="arrow" />
        </div>
      </div>

      <div className="w-full h-[27.5rem] lg:h-[50rem]">
        <Image src={heroImage} alt="OMHU Teddy Sofa" fill className="w-full object-cover object-center md:aspect-video" />
      </div>
    </section>
  );
}

export default HeroSection;
