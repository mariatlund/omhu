"use client";
import React, { useState } from "react";
import StepIndicator from "@/components/StepIndicator/StepIndicator";
import BillingDetails from "@/components/FormFlow/BillingDetails/BillingDetails";
import YourOrder from "@/components/YourOrder/YourOrder";
import Summary from "@/components/FormFlow/Summary/Summary";
import PaymentDetails from "@/components/FormFlow/PaymentDetails/PaymentDetails";
import ThankYou from "@/components/FormFlow/ThankYou/ThankYou";

const countries = [
  {
    value: "DK",
    label: "Denmark",
  },
  {
    value: "UK",
    label: "United Kingdom",
  },
  {
    value: "US",
    label: "United States",
  },
  {
    value: "SE",
    label: "Sweden",
  },
];

const orderInfo = [
  {
    productName: "Teddy sofa",
    fabricColour: "Brown",
    fabricHex: "#60342C",
    frameColour: "Silver",
    frameHex: "#E9E9E9",
    amount: "1",
    price: "1675",
  },
  {
    productName: "Pillows",
    fabricColour: "Green",
    fabricHex: "#3D5648",
    amount: "2",
    price: "230",
  },
];

const priceInfo = {
  subtotal: "1.905",
  deliveryCost: "Free",
  total: "1.905",
};

function Purchase() {
  const [currentStep, setCurrentStep] = useState("1");
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>();
  const button = currentStep === "1" ? "Continue to payment" : currentStep === "2" ? "Review order" : "Complete order";
  const checkboxes = currentStep === "3" ? "true" : "false";

  function nextStep() {
    if (currentStep === "1") {
      setCurrentStep("2");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    if (currentStep === "2") {
      setCurrentStep("3");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    if (currentStep === "3") {
      setCurrentStep("4");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    console.log(currentStep);
  }

  return (
    <>
      {currentStep != "4" ? (
        <div className="container mt-5 mb-14 md:mb-48 xl:mb-80 text-blue">
          {currentStep === "3" ? <StepIndicator activeStep="3" /> : currentStep === "2" ? <StepIndicator activeStep="2" /> : <StepIndicator activeStep="1" />}
          <div className="xl:grid xl:grid-cols-2 xl:gap-x-10">
            <div className="mt-10 2xl:mt-16">{currentStep === "3" ? <Summary /> : currentStep === "2" ? <PaymentDetails /> : <BillingDetails countryOptions={countries} selectCurrentValue={selectedCountry} selectOnChange={setSelectedCountry} />}</div>

            <div className="mt-10 2xl:mt-16">
              <YourOrder buttonLabel={button} checkboxes={checkboxes} order={orderInfo} priceInfo={priceInfo} buttonCallback={nextStep} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container py-80 xl:pb-96 grid w-full place-content-center">
          <ThankYou />
        </div>
      )}
    </>
  );
}

export default Purchase;

// This should contain the full purchase flow (?) in a single page (react modules that are updated as the user navigates?)
