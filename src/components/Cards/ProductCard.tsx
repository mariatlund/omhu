import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  productName: string;
  price: number;
  productImage: string;
  newlyAdded: boolean;
  colors: ColorOptions;
}

export type ColorOptions = {
  brown: singleColorOption;
  cream_white: singleColorOption;
};

export type singleColorOption = {
  label: string;
  value: string;
  hexCode: string;
  images: string[];
};

function ProductCard({ productName, price, productImage, newlyAdded, colors }: ProductCardProps) {
  return (
    <div className="w-[280px] sm:w-[350px] flex flex-col gap-5 relative">
      {newlyAdded && <div className="h-auto w-auto px-[10px] py-[3px] absolute top-5 right-5  bg-blue text-white text-center uppercase">new !</div>}
      <Link href={`/products/${productName}`}>
        <Image src={productImage} alt={productName} width={350} height={300} />
      </Link>
      <div className="product_colors flex flex-row gap-[10px]">
        {Object.values(colors).map((color, index: number) => {
          if (index < 5) {
            return <div key={index} className="w-5 h-5" style={{ backgroundColor: color.hexCode }}></div>;
          }
        })}
        {Object.keys(colors).length > 5 ? <div className="style-small text-blue-75">+{Object.keys(colors).length - 5} more colors</div> : null}
      </div>
      <div className="product_info style-h4 text-blue uppercase  flex flex-row justify-between font-body">
        <p>{productName}</p>
        <p>
          EUR <span> {price}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
