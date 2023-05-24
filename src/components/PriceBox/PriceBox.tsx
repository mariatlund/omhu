import React from "react";

interface PriceBoxProps {
  subtotal: string;
  deliveryCost: string | "Free";
  total: string;
}

function PriceBox({ subtotal, deliveryCost, total }: PriceBoxProps) {
  return (
    <div className="bg-white border-2 border-blue p-5 text-blue style-body grid grid-cols-2 place-content-center">
      <div className="grid font-semibold gap-y-4">
        <span>Subtotal</span>
        <span>Delivery</span>
        <span>Total</span>
      </div>

      <div className="grid gap-y-4 text-right">
        <span>{`${subtotal} DKK`}</span>
        <span>{deliveryCost === "Free" ? "Free" : `${deliveryCost} DKK`}</span>
        <span className="font-semibold">{`${total} DKK`}</span>
      </div>
    </div>
  );
}

export default PriceBox;
