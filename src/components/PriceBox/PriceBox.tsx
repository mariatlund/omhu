import React from "react";

interface PriceBoxProps {
  currency: "EUR" | "DKK" | "USD";
  subtotal: string;
  deliveryCost: string | "Free";
  total: string;
}

function PriceBox({ currency, subtotal, deliveryCost, total }: PriceBoxProps) {
  return (
    <div className="bg-white border border-blue p-5 text-blue style-body grid grid-cols-2 place-content-center">
      <div className="grid font-semibold gap-y-4">
        <span>Subtotal</span>
        <span>Delivery</span>
        <span>Total</span>
      </div>

      <div className="grid gap-y-4 text-right">
        <span>{`${subtotal} ${currency}`}</span>
        <span>{deliveryCost === "Free" ? "Free" : `${deliveryCost} ${currency}`}</span>
        <span className="font-semibold">{`${total} ${currency}`}</span>
      </div>
    </div>
  );
}

export default PriceBox;
