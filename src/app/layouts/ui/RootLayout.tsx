"use client";
import { Header, Footer } from "@/widgets";
import "../globals.css";
import { useInitData } from "@telegram-apps/sdk-react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const data = useInitData(true);
  console.log(data);

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
