import { Option } from "@/components/InputFields/Selectors/Select/Select";
import Select from "../../../components/InputFields/Selectors/Select/Select";
import TextInput from "../../../components/InputFields/TextInput/TextInput";
import React from "react";

export interface BillingDetailsProps {
  countryOptions: Option[];
  selectOnChange: (value: string) => void;
  selectCurrentValue?: string;
}

function BillingDetails({ countryOptions, selectOnChange, selectCurrentValue }: BillingDetailsProps) {
  return (
    <section className="text-blue">
      <h2 className="style-h3 mb-5">Billing Details</h2>
      <form action="" className="grid gap-y-5">
        <div className="grid gap-y-5 md:grid-cols-2 md:gap-x-5">
          <TextInput type="text" fieldName="FirstName" label="First name" placeholder="John" />
          <TextInput type="text" fieldName="LastName" label="Last name" placeholder="Applebottom" />
        </div>
        <TextInput type="text" fieldName="BusinessName" label="Business name (Optional)" placeholder="Applecrate Inc." />
        <Select options={countryOptions} onChange={selectOnChange} placeholder="Select country" selectedOptionValue={selectCurrentValue} />
        <div className="grid gap-y-5 md:grid-cols-5 md:gap-x-5">
          <div className="md:col-span-4">
            <TextInput type="text" fieldName="Address" label="Address" placeholder="Pear Avenue, 28" />
          </div>
          <div className="md:col-span-1">
            <TextInput type="text" fieldName="Suite" label="Apartment/Suite" placeholder="5tv" />
          </div>
        </div>
        <div className="grid gap-y-5 md:grid-cols-5 md:gap-x-5">
          <div className="md:col-span-2">
            <TextInput type="text" fieldName="Postnumber" label="Post number" placeholder="2300" />
          </div>
          <div className="md:col-span-3">
            <TextInput type="text" fieldName="City" label="City" placeholder="Copenhagen" />
          </div>
        </div>
        <TextInput type="email" fieldName="Email" label="Email" placeholder="johnapplebottom@gmail.com" />
        <TextInput type="tel" fieldName="Phone" label="Phone number" placeholder="+45 23586778" />
      </form>
    </section>
  );
}

export default BillingDetails;
