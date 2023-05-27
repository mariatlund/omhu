"use client";
import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import "../../styles/globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { url, headers } from "../../config.js";
import { Products } from "@/types/products.js";

// LAYOUT FOR PAGES IN /PAGES (THEY ARE USING OLD NEXTJS ROUTING, SO OUR ROOT LAYOUT DOESN'T APPLY TO THEM)

interface Props {
  children: React.ReactNode;
  products: Products;
}

export function Layout({ children }: Props) {
  //console.log(products);

  return (
    <div className="bg-white">
      <Navigation />
      <main id="main" className="text-blue">
        {children}
      </main>
      <Footer />
    </div>
  );
}
