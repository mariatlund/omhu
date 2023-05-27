"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

function ShowroomBox() {
  return (
    <section className="container style-body-small text-blue grid gap-y-10 md:grid-cols-3 xl:grid-cols-5 md:gap-y-0  md:border-2 md:border-blue md:p-14">
      <div className="grid gap-y-5 md:col-span-1 xl:col-span-1 h-fit">
        <h2 className="style-h3 uppercase">Walk in times</h2>

        <div className="md:mt-10">
          <h3 className="style-h4 mb-2">Zealand</h3>
          <div className="mb-4">
            <address className="not-italic mb-2">
              Kram & Klenodier APS (OMHU CPH) <br /> Kongevejen 340, 2840 Holte
            </address>
            <span>(The entrance is at the basement level at the back of the building)</span>
          </div>
          <div className="grid space-y-1">
            <span>Monday-Friday: Book a timeslot</span>
            <span>Wednesday: 16:00-20:00</span>
            <span>Sunday: 10:00-14:00</span>
          </div>
        </div>

        <div>
          <h3 className="style-h4 mb-2">Jutland</h3>
          <address className="not-italic">
            Tusindfryds Loppeland <br /> Trindsøvej 10, 8000 Aarhus C
          </address>
        </div>
      </div>

      <div className="grid gap-y-2 md:col-span-2 xl:col-span-4">
        <div className="md:pl-10 lg:flex lg:gap-x-10 lg:items-center xl:pl-36">
          <h2 className="style-h3 uppercase">Book a time slot</h2>
          <span>Copenhagen only</span>
        </div>
        <InlineWidget url="https://calendly.com/d/yp8-7hz-5pc/omhu-showcase" styles={{ height: "44rem" }} />
      </div>
    </section>
  );
}

export default ShowroomBox;
