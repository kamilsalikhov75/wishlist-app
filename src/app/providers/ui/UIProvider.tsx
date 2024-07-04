import { NextUIProvider } from "@nextui-org/react";

interface UIProviderProps {
  children: React.ReactNode;
}
export const UIProvider = ({ children }: UIProviderProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
