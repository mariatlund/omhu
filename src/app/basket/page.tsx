import React from "react";
import BasketOverview from "@/modules/BasketOverview/BasketOverview";
import { OrderInfoType } from "@/types/orderInfo";
import { Products } from "@/types/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basket",
  keywords: ["Basket", "Omhu"],
  description: "View the items in your basket here.",
};

const mockItems = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1618220179428-22790b461013",
      height: 1054,
      width: 593,
    },
    productName: "Teddy",
    fabricColour: "Dusty green",
    fabricHex: "#6B6BEC",
    frameColour: "Chrome",
    frameHex: "#919190",
    amount: 1,
    price: "12.899",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1618220179428-22790b461013",
      height: 1054,
      width: 593,
    },
    productName: "Teddy",
    fabricColour: "Dusty green",
    fabricHex: "#6B6BEC",
    frameColour: "Chrome",
    frameHex: "#919190",
    amount: 1,
    price: "12.899",
  },
];

interface basketProps {
  products: Products;
}

function basket({ products }: basketProps) {
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
