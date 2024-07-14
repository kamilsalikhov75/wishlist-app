import { Snippet } from "@nextui-org/react";
import Link from "next/link";
import { CheckIcon, CopyIcon } from "../icons";

interface CopyProps {
  link: string;
}

export const Copy = ({ link }: CopyProps) => {
  return (
    <Snippet
      symbol=""
      className="w-full mt-4 bg-white"
      classNames={{ pre: "truncate" }}
      copyIcon={<CopyIcon />}
      checkIcon={<CheckIcon />}
      disableTooltip
    >
      <Link target="_blank" href={link}>
        {link}
      </Link>
    </Snippet>
  );
};
