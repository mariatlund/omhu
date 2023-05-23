import Button from "@/components/Button/Button";
import React from "react";

const heroImage = "https://amorea.dk/exam/finalExam/teddy_hero.jpg";
function HeroSection() {
  //
  return (
    <section className="">
      <div className="relative h-[60vh] bg-cover bg-no-repeat w-screen sm:bg-[center_bottom_-10rem] md:bg-[center_bottom_-20rem] lg:bg-[center_bottom_-28rem]  lg:bg-[length:1450px]  lg:h-[90vh]" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="container flex flex-row lg:justify-between absolute bottom-5 right-0 lg:bottom-10 lg:items-center items-end justify-end">
          <div className="w-96 hidden sm:inline-block">
            <p className="style-h2 uppercase text-white">Ready for a bear hug?</p>
          </div>
          <div>
            <Button kind="link" label="Check out Teddy" intent="alternative" size="large" href="/shop" icon="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
