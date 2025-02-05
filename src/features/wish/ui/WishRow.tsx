import { IWish } from "@/entities";
import {
  CheckIcon,
  Copy,
  CopyIcon,
  DEFAULT_ICON,
  DotsVIcon,
  LinkIcon,
} from "@/shared";
import { Button, Snippet } from "@nextui-org/react";
import { WishDropdownMenu } from "./WishDropdownMenu";
import Link from "next/link";

interface WishRowProps {
  wish: IWish;
}
export const WishRow = ({ wish }: WishRowProps) => {
  return (
    <div className="p-3 rounded-[16px] w-full h-fit bg-purple-50">
      <div className="flex gap-6 justify-start">
        <span className="text-[30px] h-[60px] px-[15px] flex items-center justify-center bg-white rounded-[16px] ">
          {wish.icon || DEFAULT_ICON}
        </span>
        <div className="flex justify-between items-start text-sm w-full">
          <div>
            <h5 className="font-bold">{wish.name}</h5>
            <span>{wish.price !== undefined && `${wish.price} ₽`}</span>
          </div>
          <WishDropdownMenu />
        </div>
      </div>
      {wish.link && <Copy link={wish.link} />}
    </div>
  );
};
