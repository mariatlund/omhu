import React from "react";

interface OrderItemProps {
  productName: string;
  fabricColour: string;
  frameColour?: string;
  amount: string;
  price: string;
}

function OrderItem({ productName, fabricColour, frameColour, amount, price }: OrderItemProps) {
  return (
    <div className="text-blue style-body-small grid border border-blue p-3 sm:grid-cols-4 items-center">
      <h3 className="font-semibold uppercase">{productName}</h3>

      <div className="flex justify-between items-center mt-2 sm:col-span-3">
        <div className="grid style-body-x-small text-blue-75">
          <div className="flex gap-1">
            <span className="block w-4 h-4 bg-grey-50 rounded-full"></span>
            <span>{fabricColour}</span>
          </div>
          {frameColour ? (
            <div className="flex gap-1">
              <span className="block w-4 h-4 bg-grey-50 rounded-full"></span>
              <span>{frameColour}</span>
            </div>
          ) : null}
        </div>

        <span className="font-semibold">{`x ${amount}`}</span>

        <span>{`${price} DKK`}</span>
      </div>
    </div>
  );
}

export default OrderItem;
