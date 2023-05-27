"use client";
import React from "react";
import Faq from "@/modules/Faq/Faq";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  keywords: ["FAQ", "Omhu", "Frequently asked questions", "Delivery", "Returns"],
  description: "Read answers to frequently asked questions about delivery, returns and more.",
};

function faq() {
  return (
    <>
      <div className="container mt-5 mb-14 md:mt-14 md:mb-40 text-blue">
        <h1 className="style-h1 mb-10">FAQ</h1>
        <p className="mb-10">
          Are you looking for more information about delivery, returns or shipping? We have gathered some answers to frequently asked questions here for you. If you have any further questions, feel free to{" "}
          <Link href={"/contact"} className="text-link underline underline-offset-2">
            contact us.
          </Link>
        </p>
        <Faq />
      </div>
    </>
  );
}

export default faq;

// This should be the FAQ page
