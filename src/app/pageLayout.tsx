import Navigation from "@/components/Menu/Navigation";
import Footer from "@/modules/Footer/Footer";
import "../../styles/globals.css";

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
