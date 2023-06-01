import React from "react";

export interface OrderItemProps {
  productName: string;
  fabricColour: string;
  fabricHex: string;
  frameColour?: string;
  frameHex?: string;
  amount: string;
  price: string;
}

function OrderItem({ productName, fabricColour, fabricHex, frameColour, frameHex, amount, price }: OrderItemProps) {
  return (
    <div className="text-blue style-body-small grid border-2 border-blue p-3 sm:grid-cols-4 items-center md:px-5">
      <h3 className="font-semibold uppercase">{productName}</h3>

      <div className="flex justify-between items-center mt-2 sm:col-span-3">
        <div className="grid style-body-x-small text-blue-75">
          <div className="flex gap-1">
            <span className="block w-4 h-4 rounded-full flex-none" style={{ backgroundColor: fabricHex }}></span>
            <span>{fabricColour}</span>
          </div>
          {frameColour ? (
            <div className="flex gap-1">
              <span className="block w-4 h-4 rounded-full flex-none" style={{ backgroundColor: frameHex }}></span>
              <span>{frameColour}</span>
            </div>
          ) : null}
        </div>

        <span className="font-semibold">{`x ${amount}`}</span>

        <span>{`${price} EUR`}</span>
      </div>
    </div>
  );
}

export default OrderItem;
