import PriceBox, { PriceBoxProps } from "../PriceBox/PriceBox";
import OrderItem, { OrderItemProps } from "../OrderItem/OrderItem";
import React from "react";
import Button from "../Button/Button";
import Checkbox from "../InputFields/Checkbox/Checkbox";

interface YourOrderProps {
  order: OrderItemProps[];
  priceInfo: PriceBoxProps;
  buttonLabel: string;
  buttonCallback: () => void | undefined;
  checkboxes: "true" | "false";
}

function YourOrder({ order, priceInfo, buttonLabel, buttonCallback, checkboxes }: YourOrderProps) {
  return (
    <section className="text-blue grid">
      <h2 className="style-h3 mb-3">Your order</h2>
      <div className="grid space-y-5">
        <div className="space-y-[-2px]">
          {order.map((item, index) => {
            return <OrderItem key={index} {...item} />;
          })}
        </div>
        <div className="space-y-5 w-full justify-self-end md:w-1/2">
          <PriceBox {...priceInfo} />
          <div className="w-full">
            {checkboxes === "true" ? (
              <div className="space-y-2">
                <Checkbox label="I accept the terms and conditions" value="Indeed" name="checkbox" />
                <Checkbox label="I want to receive emails & newsletters" value="Indeed" name="checkbox" />
              </div>
            ) : null}
          </div>
          <div className="grid justify-items-end">
            <Button intent="primary" size="large" label={buttonLabel} icon="arrow" kind="base" callback={buttonCallback} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourOrder;
