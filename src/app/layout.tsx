import Head from "next/head";
import "../../styles/globals.css";
import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import React from "react";
import { Metadata } from "next";
// import favicon from "../../public/favicon.png";

// _APP.JS - ADD LOGIC HERE

export const metadata: Metadata = {
  title: {
    template: "%s | OMHU",
    default: "Your home, with omhu. | OMHU",
  },
  keywords: ["Sofa", "Furniture", "Decor", "Furniture design", "Retro furniture", "Teddy"],
  description: "Explore our retro-inspired furniture and popular Teddy sofa.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children?: React.ReactNode }) {
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
