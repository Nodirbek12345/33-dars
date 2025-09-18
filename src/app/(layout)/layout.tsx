import Footer from "@/shared/components/footer/Footer";
import Header from "@/shared/components/header/Header";
// import ScrollUp from "@/shared/components/scroll-up/scroll-up";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
