import React from "react";
import BasketOverview from "@/modules/BasketOverview/BasketOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basket",
  keywords: ["Basket", "Omhu"],
  description: "View the items in your basket here.",
};

const mockItems = [
  {
    image: {
      src: "https://i.imgur.com/9yEByoA.jpg",
      height: 900,
      width: 900,
      alt: "Brown Teddy Sofa Full Picture",
    },
    productName: "Teddy sofa",
    fabricColour: "Brown",
    fabricHex: "#60342C",
    frameColour: "Silver",
    frameHex: "#E9E9E9",
    amount: 1,
    price: "1675,-",
  },
  {
    image: {
      src: "https://i.imgur.com/5jxApFG.jpg",
      height: 900,
      width: 900,
      alt: "Green pillows",
    },
    productName: "Pillows",
    fabricColour: "Green",
    fabricHex: "#3D5648",
    amount: 2,
    price: "230,-",
  },
];

// interface basketProps {
//   products: Products;
// }

function basket() {
  return (
    <>
      <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
        <h1 className="style-h1 mb-10">Your basket</h1>
        <BasketOverview items={mockItems} total="25.789" />
      </div>
    </>
  );
}

export default basket;
