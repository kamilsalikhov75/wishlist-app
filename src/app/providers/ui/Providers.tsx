import { UIProvider } from "./UIProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <UIProvider>{children}</UIProvider>;
};
