import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 h-full">
      <Button as={Link} href="/" variant='bordered' className="border-purple-50">
        Главная
      </Button>
      {children}
    </div>
  );
}
