import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import "../../styles/globals.css";

// LAYOUT FOR PAGES IN /PAGES (THEY ARE USING OLD NEXTJS ROUTING, SO OUR ROOT LAYOUT DOESN'T APPLY TO THEM)

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
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
