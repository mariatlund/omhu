import React from "react";
import { Layout } from "@/app/pageLayout";
import ContactBox from "@/modules/ContactBox/ContactBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  keywords: ["Contact", "Omhu"],
  description: "Get in touch with OMHU.",
};

function contact() {
  return (
    <>
      <div className="container mt-5 mb-14 md:mt-14 md:mb-72">
        <h1 className="style-h1 mb-10">Contact</h1>
        <ContactBox />
      </div>
    </>
  );
}

export default contact;
