import React from "react";
import RootLayout from "@/app/layout";
import Faq from "@/modules/Faq/Faq";
import { Layout } from "@/app/pageLayout";

function faq() {
  return (
    <>
      <Layout>
        <h1>FAQ</h1>
        <Faq />
      </Layout>
    </>
  );
}

export default faq;

// This should be the FAQ page
