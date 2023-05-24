import Image from "next/image";
import React, { useState } from "react";
import QuantitySelector from "../InputFields/Selectors/QuantitySelector";

export type BasketImage = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

export interface BasketItemProps {
  image: BasketImage;
  productName: string;
  fabricColour: string;
  fabricHex: string;
  frameColour?: string;
  frameHex?: string;
  amount: number;
  price: string;
}

function BasketItem({ image, productName, fabricColour, fabricHex, frameColour, frameHex, amount, price }: BasketItemProps) {
  const [itemQuantity, setItemQuantity] = useState(amount);

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setItemQuantity(value);
    }
  };

  return (
    <div className="grid grid-rows-2 grid-cols-3 items-center gap-2 style-body-small text-blue p-2 md:p-5 md:border-2 md:border-t-0 md:grid-rows-1 md:grid-cols-12 md:gap-x-5">
      <Image src={image.src} alt={image.alt ? image.alt : ""} height={image.height} width={image.width} className="aspect-square flex-none w-20 h-20 order-1 md:w-full md:h-full md:col-span-2 object-cover" />

      <div className="grid order-2 md:col-span-3">
        <h3 className="style-body font-semibold uppercase">{productName}</h3>

        <div>
          <div className="flex gap-1 items-center">
            <span className="block w-4 h-4 rounded-full flex-none" style={{ backgroundColor: fabricHex }}></span>
            <span>{fabricColour}</span>
          </div>
          {frameColour ? (
            <div className="flex gap-1 items-center flex-none">
              <span className="block w-4 h-4 rounded-full" style={{ backgroundColor: frameHex }}></span>
              <span>{frameColour}</span>{" "}
            </div>
          ) : null}
        </div>
      </div>

      <div className="order-4 col-span-2 md:order-3 md:col-span-3 md:justify-self-center">
        <QuantitySelector onChangeQuantity={handleQuantity} counter={itemQuantity} setCounter={setItemQuantity} />
      </div>

      <span className="order-3 font-semibold justify-self-end md:style-body md:order-4 md:col-span-2">{`${price} DKK`}</span>

      <div className="order-6 text-grey-75 justify-self-end md:order-5 md:col-span-2 cursor-pointer hover:text-orange">
        <svg width="24" height="29" viewBox="0 0 24 29" fill="none">
          <path d="M9.5 2L8.25 3.25H2V5.75H22V3.25H15.75L14.5 2H9.5ZM3.25 8.25V24.5C3.25 25.875 4.375 27 5.75 27H18.25C19.625 27 20.75 25.875 20.75 24.5V8.25H3.25Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default BasketItem;
