"use client";

import Head from "next/head";
import "../../styles/globals.css";
import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import React, { useState } from "react";
import favicon from "../../public/favicon.png";
import { OrderInfoType } from "@/types/orderInfo";

// _APP.JS - ADD LOGIC HERE

// export const metadata: Metadata = {
//   title: {
//     default: "Furniture with care | OMHU",
//     template: "%s | OMHU",
//   },
//   keywords: ["Sofa", "Furniture", "Decor", "Furniture design", "Retro furniture", "Teddy"],
//   description: "Your home, with omhu.",
//   robots: {
//     index: false,
//     follow: false,
//   },
//   icons: {
//     icon: "../assets/favicon.png",
//   },
// };

export default function RootLayout({ children }: { children?: React.ReactNode }) {
  const [orderInfo, setOrderInfo] = useState<OrderInfoType>({
    total: 0,
    items: [
      {
        image: "",
        productName: "",
        fabricColor: "",
        fabricHex: "",
        frameColor: "",
        frameHex: "",
        amount: 1,
        price: 1000,
      },
    ],
  });

  const addToBasket = (product: any) => {
    console.log("add to basket");
    setOrderInfo((prevOrderInfo: OrderInfoType) => ({
      ...prevOrderInfo,
      items: [
        ...prevOrderInfo.items,
        {
          image: product.image,
          productName: product.name,
          fabricColor: product.chosenFabricColor,
          fabricHex: product.fabricHex,
          frameColor: product.chosenMetalColor,
          frameHex: product.metalHex,
          amount: product.quantity,
          price: product.price,
        },
      ],
    }));
  };
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

          {/* {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                addToBasket: addToBasket,
              });
            }
            return null;
          })} */}
          {/* <Component addToBasket={addToBasket} /> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
