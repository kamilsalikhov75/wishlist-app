"use client";

import { SDKProvider } from "@telegram-apps/sdk-react";

interface TmaProviderProps {
  children: React.ReactNode;
}

export const TmaProvider = ({ children }: TmaProviderProps) => {
  return (
    <SDKProvider acceptCustomStyles debug>
      {children}
    </SDKProvider>
  );
};
