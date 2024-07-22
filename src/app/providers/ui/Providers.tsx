import { TmaProvider } from "./TmaProvider";
import { UIProvider } from "./UIProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UIProvider>
      <TmaProvider>{children}</TmaProvider>
    </UIProvider>
  );
};
