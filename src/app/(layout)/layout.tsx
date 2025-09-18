import Footer from "@/shared/components/footer/Footer";
import Header from "@/shared/components/header/Header";
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
