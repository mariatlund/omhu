import PriceBox, { PriceBoxProps } from "../PriceBox/PriceBox";
import OrderItem, { OrderItemProps } from "../OrderItem/OrderItem";
import React from "react";
import Button from "../Button/Button";

interface YourOrderProps {
  order: OrderItemProps[];
  priceInfo: PriceBoxProps;
  buttonLabel: string;
  buttonCallback: () => void | undefined;
}

function YourOrder({ order, priceInfo, buttonLabel, buttonCallback }: YourOrderProps) {
  return (
    <section className="text-blue">
      <h2 className="style-h3 mb-3">Your order</h2>
      <div className="grid space-y-5">
        <div className="space-y-[-2px]">
          {order.map((item, index) => {
            return <OrderItem key={index} {...item} />;
          })}
        </div>
        <div className="space-y-5">
          <PriceBox {...priceInfo} />
          <div className="grid justify-items-end">
            <Button intent="primary" size="large" label={buttonLabel} icon="arrow" kind="base" callback={buttonCallback} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourOrder;
