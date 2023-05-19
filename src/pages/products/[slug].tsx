import React from "react";
import { Layout } from "@/app/pageLayout";
import MetalColorSelector from "@/components/InputFields/Selectors/MetalColorSelector";
import ColourSelect from "@/components/InputFields/Selectors/ColourSelect/ColourSelect";
import QuantitySelector from "@/components/InputFields/Selectors/QuantitySelector";
import Accordion from "@/components/Accordion/Accordion";
import { useState } from "react";
import Button from "@/components/Button/Button";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

const deliveryQuestions = [
  {
    question: "Materials",
    answer: "We currently deliver to Europe, the United Kingdom and the United States. If you're located somewhere else in the world, you can contact us to find out if we can arrange for delivery to your location.",
  },
  {
    question: "Shipping",
    answer:
      "Shipping costs are included in the price for all purchases with delivery within Europe. For delivery to other countries, we will generate a custom price for you based on our agreement with our shipping partner. Enter your address when purchasing, and the delivery price will be generated for you.",
  },
  {
    question: "Measurements",
    answer:
      "At the moment, we have wait times for production before delivery can take place. We do our best to keep you informed about your order, and will let you know the moment it ships. Once your order has shipped it usually takes between one and two weeks to arrive depending on your location.",
  },
];

const images = [
  {
    imageSrc: "https://images.unsplash.com/photo-1567016432779-094069958ea5",
    imageWidth: 900,
    imageHeight: 900,
    alt: "Sofa",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a",
    imageWidth: 852,
    imageHeight: 1279,
    alt: "Sofa",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    imageWidth: 946,
    imageHeight: 630,
    alt: "Sofa",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1567016507665-356928ac6679",
    imageWidth: 946,
    imageHeight: 946,
    alt: "Sofa",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1569813017258-b9bbf395b008",
    imageWidth: 946,
    imageHeight: 1261,
    alt: "Sofa",
  },
];
function Product() {
  const [counter, setCounter] = useState<number>(0);
  const [selectedMetalColor, setSelectedMetalColor] = useState<string | undefined>();
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCounter(value);
    }
  };
  // const handleMetalColor = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedMetalColor(e.target.value);
  // };
  return (
    <>
      <Layout>
        <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
          <h1 className="style-h3 mb-5 text-blue uppercase">Teddy</h1>
          <div className="flex flex-col gap-10 text-blue">
            <ImageCarousel images={images} />
            <div className="flex flex-row justify-between items-center">
              <p className="style-h4">
                EUR <span>1200</span>
              </p>
              <Button intent="primary" label="Add to cart" size="small" kind="base" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod nam sapiente perspiciatis. Quo enim amet cumque a soluta modi quae, ipsam odio repellat unde doloribus dolorum vel quam quasi.</p>
            <MetalColorSelector onChangeMetalColor={setSelectedMetalColor} selectedMetalColor={selectedMetalColor} />
            <h2>Fabric colour</h2>
            {/* <ColourSelect /> */}
            <QuantitySelector onChangeQuantity={handleQuantity} counter={counter} setCounter={setCounter} />
            <Accordion title="" items={deliveryQuestions} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Product;

// This should be the product page generic template
