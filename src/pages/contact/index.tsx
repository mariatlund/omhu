import React from "react";
import { Layout } from "@/app/pageLayout";
import ContactBox from "@/modules/ContactBox/ContactBox";

function contact() {
  return (
    <>
      <Layout>
        <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
          <h1 className="style-h1 mb-10">Contact</h1>
          <ContactBox />
        </div>
      </Layout>
    </>
  );
}

export default contact;
