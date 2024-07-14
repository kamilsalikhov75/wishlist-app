import { PlusIcon, WithTitle } from "@/shared";
import { MOCK_EVENTS } from "../model";
import { EventLink } from "./EventLink";
import Link from "next/link";

export const EventList = () => {
  const events = MOCK_EVENTS;
  return (
    <WithTitle title="События" classNames={{ wrapper: "mb-5" }}>
      <div className="flex overflow-x-scroll gap-3 w-[calc(100dvw-24px)] no-scrollbar">
        <Link
          className="flex flex-col text-center w-[calc(100dvw/4-16px)] gap-2 max-w-[100px]"
          href={`/list/create`}
        >
          <span className="text-[30px] items-center justify-center bg-purple-50 rounded-full flex w-[calc(100dvw/4-16px)] h-[calc(100dvw/4-16px)] max-h-[100px] max-w-[100px]">
            <PlusIcon className="fill-black" />
          </span>
          <span className="truncate text-xs">Создать</span>
        </Link>
        {events.map((event) => (
          <EventLink event={event} key={event.id} />
        ))}
      </div>
    </WithTitle>
  );
};
