import { MOCK_EVENTS } from "@/src/features/event/model";
import { WithTitle } from "@/shared";
import { MOCK_WISHES } from "@/src/features/wish/model/mock";
import { WishRow } from "@/features";

interface EventPageProps {
  params: { id: string };
}

export const EventPage = ({ params }: EventPageProps) => {
  const event = MOCK_EVENTS.find((event) => event.id === params.id);
  const eventWishes = MOCK_WISHES.filter((wish) => wish.event.id === event?.id);
  return (
    <div>
      <WithTitle title={`${event?.title} ${event?.icon || "🎁"}`}>
        {eventWishes.length > 0 ? (
          <div className="flex flex-col gap-4">
            {eventWishes.map((wish) => (
              <WishRow wish={wish} key={wish.id} />
            ))}
          </div>
        ) : (
          <h3>Здесь пусто :(</h3>
        )}
      </WithTitle>
    </div>
  );
};
