import clsx from "clsx";
import React from "react";

interface StepIndicatorProps {
  activeStep: "1" | "2" | "3";
}

function StepIndicator({ activeStep }: StepIndicatorProps) {
  return (
    <div>
      {/* mobile */}
      <div className="text-blue style-body font-semibold w-full grid md:hidden">
        <div className="flex gap-x-10 w-full justify-center">
          <span className={clsx("block w-5 h-5 rounded-full", activeStep === "1" ? "bg-blue" : "bg-grey-50")}></span>
          <span className={clsx("block w-5 h-5 rounded-full", activeStep === "2" ? "bg-blue" : "bg-grey-50")}></span>
          <span className={clsx("block w-5 h-5 rounded-full", activeStep === "3" ? "bg-blue" : "bg-grey-50")}></span>
        </div>
        <div className="w-full grid place-content-center mt-4">
          <span>{activeStep === "1" ? "Billing details" : activeStep === "2" ? "Payment details" : "Confirm & Pay"}</span>
        </div>
      </div>

      {/* desktop */}
      <div className="text-blue style-body font-semibold w-full hidden md:grid">
        <div className="flex gap-x-24 w-full justify-center">
          <div className="grid">
            <span className={clsx("block w-8 h-8 rounded-full justify-self-center", activeStep === "1" ? "bg-blue" : "bg-grey-50")}></span>
            <span className="mt-2">Billing details</span>
          </div>
          <div className="grid">
            <span className={clsx("block w-8 h-8 rounded-full justify-self-center", activeStep === "2" ? "bg-blue" : "bg-grey-50")}></span>
            <span className="mt-2">Payment details</span>
          </div>
          <div className="grid">
            <span className={clsx("block w-8 h-8 rounded-full justify-self-center", activeStep === "3" ? "bg-blue" : "bg-grey-50")}></span>
            <span className="mt-2">Confirm & Pay</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepIndicator;
