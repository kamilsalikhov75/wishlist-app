"use client";

import { useInitData } from "@telegram-apps/sdk-react";
import { TmaProvider } from "../../providers";

interface MiniAppLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: MiniAppLayoutProps) => {
  const data = useInitData(true);
  console.log(data);

  return children;
};

export const MiniAppLayout = ({ children }: MiniAppLayoutProps) => (
  <TmaProvider>
    <Layout>{children}</Layout>
  </TmaProvider>
);
