"use client";
import { Header, Footer } from "@/widgets";
import "../globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      <main className="h-[calc(100dvh-165px)] overflow-y-scroll px-3 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};
