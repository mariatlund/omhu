import Image from "next/image";
import React from "react";

type Image = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  alt?: string;
};

interface TextAndGifProps {
  title: string;
  text: string;
  image: Image;
}

function TextAndGif({ title, text, image }: TextAndGifProps) {
  return (
    <section className="text-blue w-full grid place-content-center container">
      <div className="md:flex md:gap-x-10 lg:gap-x-20 items-center">
        <div>
          <h2 className="style-h3 uppercase mb-5">{title}</h2>
          <p className="style-body-small md:style-body max-w-lg">{text}</p>
        </div>

        <div className="mt-5 md_mt-0">
          <Image src={image.imageSrc} alt={image.alt ? image.alt : ""} height={image.imageHeight} width={image.imageWidth} className="object-cover aspect-video" />
        </div>
      </div>
    </section>
  );
}

export default TextAndGif;
