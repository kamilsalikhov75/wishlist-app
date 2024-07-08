import { IEvent } from "@/entities";
import Link from "next/link";

interface EventLinkProps {
  event: IEvent;
}

export const EventLink = ({ event }: EventLinkProps) => {
  return (
    <Link className="flex flex-col text-center w-[calc(100dvw/4-16px)] gap-2 max-w-[100px]" href={`/list/${event.id}`}>
      <span className="text-[30px] items-center justify-center bg-purple-50 rounded-full flex w-[calc(100dvw/4-16px)] h-[calc(100dvw/4-16px)] max-h-[100px] max-w-[100px]">{event.icon || "🎁"}</span>
      <span className="truncate text-xs">{event.title}</span>
    </Link>
  );
};
