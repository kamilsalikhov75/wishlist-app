import { WithTitle } from "@/shared";
import { MOCK_EVENTS } from "../model";
import { EventLink } from "./EventLink";

export const EventList = () => {
  const events = MOCK_EVENTS;
  return (
    <WithTitle title="Списки">
      <div className="flex overflow-x-scroll gap-3 w-[calc(100dvw-24px)] no-scrollbar">
        {events.map((event) => (
          <EventLink event={event} key={event.id} />
        ))}
      </div>
    </WithTitle>
  );
};
