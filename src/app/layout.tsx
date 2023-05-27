"use client";
import Head from "next/head";
import "../../styles/globals.css";
import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import { useState, useEffect } from "react";
import { Products } from "@/types/products.js";
import favicon from "../../public/favicon.png";

// _APP.JS - ADD LOGIC HERE

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Products>([]);
  const [orderInfo, setOrderInfo] = useState({
    total: 0,
    items: [
      {
        image: "",
        productName: "",
        fabricColor: "",
        fabricHex: "",
        frameColour: "",
        frameHex: "",
        amount: 1,
        price: 1000,
      },
    ],
  });

  return (
    <html lang="en">
      <Head>
        <title>OMHU</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" type="image/png" href="../../public/favicon.png" />
      </Head>
      <body className="bg-white text-blue style-body font-body">
        <Navigation />
        <main id="main" className="text-blue">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
