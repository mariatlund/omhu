import React from "react";
import Head from "next/head";
import { Layout } from "@/app/pageLayout";
import ShowroomBox from "@/modules/ShowroomBox/ShowroomBox";

function showroom() {
  return (
    <>
      <Layout>
        <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
          <h1 className="style-h1 mb-10">Showroom</h1>
          <ShowroomBox />
        </div>
      </Layout>
    </>
  );
}

export default showroom;
