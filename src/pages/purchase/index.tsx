import React, { useState } from "react";
import Head from "next/head";
import { Layout } from "@/app/pageLayout";
import StepIndicator from "@/components/StepIndicator/StepIndicator";
import BillingDetails from "@/components/FormFlow/BillingDetails/BillingDetails";
import YourOrder from "@/components/YourOrder/YourOrder";
import Summary from "@/components/FormFlow/Summary/Summary";
import PaymentDetails from "@/components/FormFlow/PaymentDetails/PaymentDetails";

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
    productName: "Teddy",
    fabricColour: "Blue",
    fabricHex: "#6B6BEC",
    frameColour: "Chrome",
    frameHex: "#919190",
    amount: "1",
    price: "12.899,00",
  },
  {
    productName: "Teddy",
    fabricColour: "Blue",
    fabricHex: "#6B6BEC",
    frameColour: "Chrome",
    frameHex: "#919190",
    amount: "1",
    price: "12.899,00",
  },
];

const priceInfo = {
  subtotal: "16.000,00",
  deliveryCost: "Free",
  total: "16.000,00",
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
    } else {
      setCurrentStep("3");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  return (
    <Layout>
      <div className="container mt-5 mb-14 md:mb-48 xl:mb-72 text-blue">
        {currentStep === "3" ? <StepIndicator activeStep="3" /> : currentStep === "2" ? <StepIndicator activeStep="2" /> : <StepIndicator activeStep="1" />}
        <div className="xl:grid xl:grid-cols-2 xl:gap-x-10">
          <div className="mt-10 2xl:mt-16">{currentStep === "3" ? <Summary /> : currentStep === "2" ? <PaymentDetails /> : <BillingDetails countryOptions={countries} selectCurrentValue={selectedCountry} selectOnChange={setSelectedCountry} />}</div>

          <div className="mt-10 2xl:mt-16">
            <YourOrder buttonLabel={button} checkboxes={checkboxes} order={orderInfo} priceInfo={priceInfo} buttonCallback={nextStep} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Purchase;

// This should contain the full purchase flow (?) in a single page (react modules that are updated as the user navigates?)
