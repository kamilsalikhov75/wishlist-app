import { WishRow } from "@/features";
import { MOCK_WISHES } from "@/src/features/wish/model/mock";
import { WithTitle } from "@/shared";

export const WishesPage = () => {
  return (
    <WithTitle title="Мои хотелки">
      <div className="flex flex-col gap-4">
        {MOCK_WISHES.map((wish) => (
          <WishRow wish={wish} key={wish.id} />
        ))}
      </div>
    </WithTitle>
  );
};
