import React from "react";
import { Layout } from "@/app/pageLayout";
import MetalColorSelector from "@/components/InputFields/Selectors/MetalColorSelector";
import ColourSelect from "@/components/InputFields/Selectors/ColourSelect/ColourSelect";
import QuantitySelector from "@/components/InputFields/Selectors/QuantitySelector";
import Accordion from "@/components/Accordion/Accordion";
import { useState } from "react";
import Button from "@/components/Button/Button";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import TextAndGif from "@/modules/TextAndGif/TextAndGif";
import Video from "@/modules/Video/Video";

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

const coloursArray = [
  {
    value: "5774",
    label: "Mustard",
    hexCode: "#C99136",
  },
  {
    value: "5771",
    label: "Turquoise",
    hexCode: "#2C6B7E",
  },
  {
    value: "5772",
    label: "Blue",
    hexCode: "#6B6BEC",
  },
  {
    value: "765",
    label: "Brown",
    hexCode: "#60342C",
  },
];

const gif = {
  imageSrc: "https://storage.googleapis.com/apt2b-wp/media/2019/04/c1644a9b-harper-sleeper-sofa-2.gif",
  imageWidth: 359,
  imageHeight: 664,
  alt: "Sofa bed unfolding",
};

function Product() {
  const [counter, setCounter] = useState<number>(0);
  const [selectedMetalColor, setSelectedMetalColor] = useState<string | undefined>();
  const [selectedColour, setSelectedColour] = useState<string | undefined>();
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCounter(value);
    }
  };

  return (
    <>
      <Layout>
        <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
          <div className="main_wrapper  flex flex-col sm:flex-row gap-10 text-blue sm:grid sm:grid-cols-2 sm:gap-x-0">
            <h1 className="style-h3 container text-blue uppercase sm:col-start-2 sm:flex sm:flex-row sm:justify-between">
              Teddy{" "}
              <span className="hidden sm:inline">
                {" "}
                EUR <span>1200</span>
              </span>
            </h1>
            <div className="image_container container  sm:row-start-1 sm:row-span-2">
              <ImageCarousel images={images} />
            </div>

            <div className="product_info container flex flex-col gap-10">
              <div className="flex flex-row justify-between items-center sm:hidden">
                <p className="style-h4">
                  EUR <span>1200</span>
                </p>
                <Button intent="primary" label="Add to cart" size="small" kind="base" />
              </div>

              <div className="sm:col-start-2 sm:row-start-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod nam sapiente perspiciatis. Quo enim amet cumque a soluta modi quae, ipsam odio repellat unde doloribus dolorum vel quam quasi.</p>
              </div>

              <MetalColorSelector onChangeMetalColor={setSelectedMetalColor} selectedMetalColor={selectedMetalColor} containerClass="w-60" />

              <div className="flex flex-col  gap-3">
                <h2 className="style-h4 uppercase">Fabric colour</h2>
                <ColourSelect options={coloursArray} onChange={setSelectedColour} selectedOptionValue={selectedColour} defaultOption={coloursArray[0]} containerClass="w-60" />
              </div>

              <div className="flex flex-col gap-3">
                <p className="style-h4 uppercase">Quantity</p>
                <QuantitySelector onChangeQuantity={handleQuantity} counter={counter} setCounter={setCounter} />
              </div>
              <div className="hidden sm:inline-block">
                <Button intent="primary" label="Add to cart" size="small" kind="base" />
              </div>
            </div>
            <div className="sm:col-start-1 sm:col-span-2 flex flex-col gap-14 sm:gap-20 sm:mt-10">
              <div className="container">
                <Accordion title="" items={deliveryQuestions} />{" "}
              </div>
              <TextAndGif
                title="Fold it how you want"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto provident deleniti suscipit id ratione repudiandae animi saepe temporibus blanditiis, asperiores voluptas aspernatur voluptate, exercitationem voluptates quisquam ea dolorem cumque?"
                image={gif}
              />
              <Video title="Easy to place, easy to style" videoSrc="https://vimeo.com/783453158" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Product;

// This should be the product page generic template
