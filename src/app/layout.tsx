import Head from "next/head";
import "../../styles/globals.css";
import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import { Metadata } from "next";

// _APP.JS - ADD LOGIC HERE

export const metadata: Metadata = {
  title: {
    default: "Furniture with care",
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
