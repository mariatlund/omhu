import Image from "next/image";
import React, { useState } from "react";
import QuantitySelector from "../InputFields/Selectors/QuantitySelector";

type BasketImage = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

interface BasketItemProps {
  image: BasketImage;
  productName: string;
  fabricColour: string;
  fabricHex: string;
  frameColour?: string;
  frameHex?: string;
  amount: number;
  price: number;
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
    <div className="grid grid-rows-2 grid-cols-3 items-center gap-2 style-body-small text-blue">
      <Image src={image.src} alt={image.alt ? image.alt : ""} height={image.height} width={image.width} className="aspect-square w-20 h-20 order-1" />

      <div className="grid order-2">
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

      <div className="order-4 col-span-2">
        <QuantitySelector onChangeQuantity={handleQuantity} counter={itemQuantity} setCounter={setItemQuantity} />
      </div>

      <span className="order-3 font-semibold">{`${price} DKK`}</span>

      <div className="order-6 justify-self-end">
        <svg width="24" height="29" viewBox="0 0 24 29" fill="none" className="text-grey-75">
          <path d="M9.5 2L8.25 3.25H2V5.75H22V3.25H15.75L14.5 2H9.5ZM3.25 8.25V24.5C3.25 25.875 4.375 27 5.75 27H18.25C19.625 27 20.75 25.875 20.75 24.5V8.25H3.25Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default BasketItem;
