"use client";

import { WithTitle } from "@/shared";
import { WishCard } from "./WishCard";
import { useState } from "react";
import { MOCK_WISHES } from "../model/mock";
import Link from "next/link";

export const WishCards = () => {
  const [currentWish, setCurrentWish] = useState(0);

  return (
    <WithTitle
      title="Хотелки"
      titleRightContent={<Link href="/list">Посмотреть все</Link>}
    >
      <div className="flex flex-col items-center relative">
        {MOCK_WISHES.map((wish, index) => (
          <WishCard
            wish={wish}
            key={wish.id}
            onClick={setCurrentWish}
            index={index}
            currentWish={currentWish}
          />
        ))}
      </div>
    </WithTitle>
  );
};
