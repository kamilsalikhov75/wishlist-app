import { Button } from "@/shared";
import Link from "next/link";

interface MainButtonLayoutProps {
  children?: React.ReactNode;
}

export const MainButtonLayout = ({ children }: MainButtonLayoutProps) => (
  <div className="flex flex-col gap-4 h-full">
    <Button as={Link} href="/" variant="bordered" className="border-purple-100">
      Главная
    </Button>
    {children}
  </div>
);
