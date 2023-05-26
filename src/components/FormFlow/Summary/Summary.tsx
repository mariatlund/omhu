import React from "react";

function Summary() {
  return (
    <section className="text-blue">
      <h2 className="style-h3 mb-5">Your information</h2>
      <div className="grid gap-y-2.5">
        <span>John Applebottom</span>
        <span>Applebottomjeans A/S</span>
        <span>bootswiththefur@gmail.com</span>
        <span>+45 263547908</span>
        <span>
          Pear Avenue 28, 5tv <br />
          2300 Copenhagen <br />
          Denmark
        </span>
      </div>
      <h2 className="style-h3 mb-5 mt-10">Payment method</h2>
      <div className="grid gap-y-2.5">
        <span>John Applebottom</span>
        <span>Visa ending in 3545</span>
      </div>
    </section>
  );
}

export default Summary;
