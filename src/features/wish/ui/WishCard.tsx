"use client";

import { IWish } from "@/entities";
import { ArrowRightIcon } from "@/shared";
import clsx from "clsx";
import { motion, MotionStyle } from "framer-motion";
import Link from "next/link";
import { MouseEventHandler } from "react";

const backgroundColors = ["red", "purple", "green"];

interface WishCardProps {
  style?: MotionStyle;
  onClick: (index: number) => void;
  className?: string;
  wish: IWish;
  currentWish: number;
  index: number;
}

const previousWish = [2, 0, 1];

export const WishCard = ({
  onClick,
  className,
  wish,
  currentWish,
  index,
}: WishCardProps) => {
  const onCardClick = () => {
    if (currentWish === index) {
      return;
    }

    onClick(index);
  };

  const onLinkClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (currentWish !== index) {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      onClick={onCardClick}
      className={clsx(
        "flex flex-col items-center h-[200px] rounded-[20px] p-3 justify-between",
        className
      )}
      layout
      style={{
        background: backgroundColors[index],
        width:
          currentWish === index
            ? "100%"
            : currentWish === previousWish[index]
            ? "95%"
            : "90%",
        position: currentWish === index ? "inherit" : "absolute",
        top:
          currentWish === index
            ? undefined
            : currentWish === previousWish[index]
            ? "40px"
            : "80px",
        zIndex:
          currentWish === index
            ? 2
            : currentWish === previousWish[index]
            ? 1
            : 0,
      }}
    >
      <span className="text-[50px]">{wish.icon || "🎁"}</span>
      <Link
        href="/test"
        onClick={onLinkClick}
        className="w-full rounded-[10px] bg-white h-fit p-2 flex justify-between items-center"
      >
        <div>
          <h3>{wish.name}</h3>
          <span>{wish.price !== undefined && `${wish.price} ₽`}</span>
        </div>
        <span>
          <ArrowRightIcon />
        </span>
      </Link>
    </motion.div>
  );
};
