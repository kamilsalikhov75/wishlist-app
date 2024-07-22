"use client";
import WebApp from "@twa-dev/sdk";
import { Header, Footer } from "@/widgets";
import "../globals.css";
import { useTelegramInitData } from "@/shared";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  WebApp.ready();
  const data = useTelegramInitData();

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
