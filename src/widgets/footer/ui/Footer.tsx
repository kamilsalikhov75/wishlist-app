import { GemIcon, UsersIcon, PlusIcon } from "@/src/shared";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-3">
      <nav className="relative grid grid-cols-2 border-t-1 p-3">
        <Link className="flex flex-col items-center justify-self-center" href="">
          <GemIcon />
          Хотелки
        </Link>
        <Link
          className="w-fit justify-self-center self-end p-4 rounded-full bg-black absolute -top-7"
          href=""
        >
          <PlusIcon />
        </Link>
        <Link className="flex flex-col items-center justify-self-center" href="">
          <UsersIcon />
          Друзья
        </Link>
      </nav>
    </footer>
  );
};
