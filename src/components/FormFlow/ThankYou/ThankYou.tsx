import Button from "../../../components/Button/Button";
import React from "react";

function ThankYou() {
  return (
    <section className="text-blue grid gap-y-5 text-center justify-items-center">
      <h2 className="style-h3">Thank you for your purchase!</h2>
      <p className="max-w-sm">You will receive a confirmation email shortly. We will inform you as soon as your order ships out.</p>
      <div className="mt-5">
        <Button intent="primary" label="Back to homepage" size="large" kind="link" href="/" target="_self" />
      </div>
    </section>
  );
}

export default ThankYou;
