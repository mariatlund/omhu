"use client";
import React from "react";
import MetalColorSelector from "@/components/InputFields/Selectors/MetalColorSelector";
import ColourSelect from "@/components/InputFields/Selectors/ColourSelect/ColourSelect";
import QuantitySelector from "@/components/InputFields/Selectors/QuantitySelector";
import Accordion from "@/components/Accordion/Accordion";
import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import TextAndGif from "@/modules/TextAndGif/TextAndGif";
import Video from "@/modules/Video/Video";
import Reviews from "@/modules/Reviews/Reviews";
import { headers } from "../../../../config.js";
import { singleProductType } from "@/types/singleProductType";

interface ProductProps {
  params: { slug: string };
}

const Product: React.FC<ProductProps> = ({ params }) => {
  const [counter, setCounter] = useState<number>(0);
  const [selectedMetalColor, setSelectedMetalColor] = useState<string>("7653");
  const [product, setProduct] = useState<singleProductType>();
  const [selectedColour, setSelectedColour] = useState<string>("765");
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCounter(value);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const options = {
          method: "GET",
          headers: headers,
        };
        const res = await fetch(`https://njmiqeyayygbjangsapv.supabase.co/rest/v1/Products?product_id=eq.${params.slug}`, options);

        const productData = await res.json();
        if (productData.length > 0) {
          setProduct(productData[0]);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);
  //console.log(product);

  if (!product) {
    return <div>Loading...</div>;
  }

  // if (selectedColour === "765") {
  //   setSelectedColour("brown");
  // } else if (selectedColour === "766") {
  //   setSelectedColour("cream_white");
  // } else if (selectedColour === "5771") {
  //   setSelectedColour("turquoise");
  // } else if (selectedColour === "767") {
  //   setSelectedColour("green");
  // } else if (selectedColour === "5774") {
  //   setSelectedColour("mustard_yellow");
  // } else if (selectedColour === "768") {
  //   setSelectedColour("dark_orange");
  // }

  // if (selectedMetalColor === "7652") {
  //   setSelectedMetalColor("silver");
  // } else if (selectedMetalColor === "7653") {
  //   setSelectedMetalColor("gold");
  // }

  //to change images based on color
  let selectedColorImages: any;
  if (selectedColour === "765") {
    selectedColorImages = product.product_colors.brown.images;
  } else if (selectedColour === "766") {
    selectedColorImages = product.product_colors.cream_white.images;
  } else if (selectedColour === "5771") {
    selectedColorImages = product.product_colors.turquoise.images;
  } else if (selectedColour === "767") {
    selectedColorImages = product.product_colors.green.images;
  } else if (selectedColour === "5774") {
    selectedColorImages = product.product_colors.mustard_yellow.images;
  } else if (selectedColour === "768") {
    selectedColorImages = product.product_colors.dark_orange.images;
  }

  const materialInfo = product.product_material_information;

  const accordionContent = [
    {
      question: "Materials",
      answer: materialInfo,
    },
    {
      question: "Shipping",
      answer:
        "We currently deliver to Europe, the United Kingdom and the United States. If you're located somewhere else in the world, you can contact us to find out if we can arrange for delivery to your location. Shipping costs are included in the price for all purchases with delivery within Europe. For delivery to other countries, we will generate a custom price for you based on our agreement with our shipping partner. Enter your address when purchasing, and the delivery price will be generated for you.",
    },
    {
      question: "Measurements",
      answer: product.product_sizes,
      image: product.product_measument_link,
    },
  ];

  const handleAddToBasket = () => {
    const productAdded = {
      image: selectedColorImages[0].imageSrc,
      name: product.product_name,
      chosenFabricColor: selectedColour,
      fabricHex: product.product_colors[selectedColour].hexCode,
      chosenMetalColor: selectedMetalColor,
      metalHex: product.product_bars_colors[selectedMetalColor].hexCode,
      price: product.product_price,
      quantity: counter,
    };
    console.log(productAdded);
    //addToBasket(productAdded);
  };

  return (
    <>
      <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
        <div className="main_wrapper  flex flex-col sm:flex-row gap-10 text-blue sm:grid sm:grid-cols-2 sm:gap-x-0">
          <h1 className="style-h3 container text-blue uppercase sm:col-start-2 sm:flex sm:flex-row sm:justify-between">
            {product.product_name}
            <span className="hidden sm:inline">
              {" "}
              EUR <span>{product.product_price}.00</span>
            </span>
          </h1>
          <div className="image_container container  sm:row-start-1 sm:row-span-2">
            <ImageCarousel images={selectedColorImages} />
          </div>

          <div className="product_info container flex flex-col gap-10">
            <div className="flex flex-row justify-between items-center sm:hidden">
              <p className="style-h4">
                EUR <span>{product.product_price}.00</span>
              </p>
              <Button intent="primary" label="Add to cart" size="small" kind="base" callback={handleAddToBasket} />
            </div>

            <div className="sm:col-start-2 sm:row-start-2">
              <p>{product.product_description}</p>
            </div>

            {product.product_bars_colors && (
              <MetalColorSelector onChangeMetalColor={setSelectedMetalColor} options={product.product_bars_colors} selectedMetalColor={selectedMetalColor} defaultOption={product.product_bars_colors.silver} containerClass="w-60" />
            )}

            <div className="flex flex-col  gap-3">
              <h2 className="style-h4 uppercase">Fabric colour</h2>
              <ColourSelect options={product.product_colors} onChange={setSelectedColour} selectedOptionValue={selectedColour} defaultOption={product.product_colors.brown} containerClass="w-60" />
            </div>

            <div className="flex flex-col gap-3">
              <p className="style-h4 uppercase">Quantity</p>
              <QuantitySelector onChangeQuantity={handleQuantity} counter={counter} setCounter={setCounter} />
            </div>
            <div className="hidden sm:inline-block">
              <Button intent="primary" label="Add to cart" size="small" kind="base" callback={handleAddToBasket} />
            </div>
          </div>
          <div className="sm:col-start-1 sm:col-span-2 flex flex-col gap-14 sm:gap-20 sm:mt-10">
            <div className="container">
              <Accordion title="" items={accordionContent} />
            </div>
            {product.product_animation !== null && (
              <TextAndGif
                title="Fold it how you want"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto provident deleniti suscipit id ratione repudiandae animi saepe temporibus blanditiis, asperiores voluptas aspernatur voluptate, exercitationem voluptates quisquam ea dolorem cumque?"
                image={product.product_animation[0]}
              />
            )}
            {product.product_name !== "Pillows" && <Video title="Easy to place, easy to style" videoSrc="https://player.vimeo.com/video/829091943?h=285c72499b" />}

            <Reviews title="Hear what other people think about this product" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
