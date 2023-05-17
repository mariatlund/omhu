import React from "react";
import RootLayout from "@/app/layout";
import Faq from "@/modules/Faq/Faq";
import { Layout } from "@/app/pageLayout";

function faq() {
  return (
    <>
      <Layout>
        <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
          <h1 className="style-h1 mb-10">FAQ</h1>
          <Faq />
        </div>
      </Layout>
    </>
  );
}

export default faq;

// This should be the FAQ page
