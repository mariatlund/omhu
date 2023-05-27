"use client";
import PriceBox from "../../components/PriceBox/PriceBox";
import BasketItem, { BasketItemProps } from "../../components/BasketItem/BasketItem";
import React from "react";
import Button from "../../components/Button/Button";

interface BasketOverviewProps {
  items: BasketItemProps[];
  total: string;
}

function BasketOverview({ items, total }: BasketOverviewProps) {
  return (
    <section className="text-blue grid">
      <div className="bg-blue text-white p-3 md:p-5 grid">
        <h2 className="style-h4 md:style-h3 uppercase justify-self-center md:justify-self-start">Items</h2>
      </div>

      <div className="mt-5 md:mt-0">
        {items.map((item, index) => {
          return <BasketItem key={index} {...item} />;
        })}
      </div>

      <div className="mt-3 md:mt-10 md:w-1/2 md:justify-self-end xl:w-1/3">
        <PriceBox subtotal={total} deliveryCost="Free" total={total} />
      </div>

      <div className="mt-5 justify-self-end">
        <Button kind="link" intent="primary" size="large" label="Proceed to purchase" href="/purchase" icon="arrow" />
      </div>
    </section>
  );
}

export default BasketOverview;
