import TextInput from "../../../components/InputFields/TextInput/TextInput";
import Radio from "../../../components/InputFields/Radio/Radio";
import React from "react";

function PaymentDetails() {
  return (
    <section className="text-blue">
      <h2 className="style-h3 mb-5">Payment Details</h2>
      <div className="grid gap-y-5">
        <fieldset className="grid gap-y-3">
          <Radio label="Credit card" value="card" fieldName="radio" defaultChecked={true} />
          <Radio label="Paypal" value="paypal" fieldName="radio" />
        </fieldset>
        <TextInput type="text" fieldName="name" label="Name on card" placeholder="John Applebottom" />
        <TextInput type="text" fieldName="cardnumber" label="Card number" placeholder="2345 3435 3456 3545" pattern="[0-9]" />
        <div className="grid grid-cols-6 gap-x-5">
          <div className="col-span-2 md:col-span-1">
            <TextInput type="text" fieldName="cvv" label="CVV" placeholder="476" pattern="[0-9]" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <TextInput type="text" fieldName="expiry" label="Expiry date" placeholder="MM / YY" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentDetails;
