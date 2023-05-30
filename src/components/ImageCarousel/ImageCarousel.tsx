import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../../styles/globals.css";
import { ImagesType } from "@/types/images";

interface ImageCarouselProps {
  images?: ImagesType[];
}

function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="space-y-2">
      <Swiper loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]} className="carousel">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.imageSrc} width={image.imageWidth} height={image.imageHeight} alt={image?.alt ? image.alt : ""} className="aspect-square" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="thumbnails">
        {images.map((image, index) => (
          <SwiperSlide key={`${index}-thumbnail`}>
            <Image src={image.imageSrc} width={image.imageWidth} height={image.imageHeight} alt={image?.alt ? image.alt : ""} className="aspect-square" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
