"use client";
import Head from "next/head";
import "../../styles/globals.css";
import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import { useState, useEffect } from "react";
import { url, headers } from "../../config.js";
import { Products } from "@/types/products.js";
import { Metadata } from "next";

// _APP.JS - ADD LOGIC HERE

export const metadata: Metadata = {
  title: {
    default: "Furniture with care | OMHU",
    template: "%s | OMHU",
  },
  keywords: ["Sofa", "Furniture", "Decor", "Furniture design", "Retro furniture", "Teddy"],
  description: "Your home, with omhu.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "../assets/favicon.png",
  },
};

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const options = {
  //         method: "GET",
  //         headers: headers,
  //       };
  //       const res = await fetch(url, options);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <html lang="en">
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
