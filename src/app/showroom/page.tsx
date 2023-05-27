import React from "react";
import ShowroomBox from "../../modules/ShowroomBox/ShowroomBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showroom",
  keywords: ["Showroom", "Omhu", "Teddy sofa"],
  description: "Come visit our showroom and try out our Teddy sofa for yourself.",
};

function showroom() {
  return (
    <>
      <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
        <h1 className="style-h1 mb-10">Showroom</h1>
        <ShowroomBox />
      </div>
    </>
  );
}

export default showroom;
