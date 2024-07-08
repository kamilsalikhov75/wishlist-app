import { MOCK_WISHES } from "@/src/features/wish/model/mock";
import { DEFAULT_ICON } from "@/shared";
import { notFound } from "next/navigation";

interface WishPageProps {
  params: { id: string };
}
export const WishPage = ({ params }: WishPageProps) => {
  const wish = MOCK_WISHES.find((mockWish) => mockWish.id === params.id);

  if (!wish) {
    return notFound();
  }

  return (
    <div className="w-full h-full bg-purple-50 rounded-[16px] p-3">
      <span>{wish?.icon || DEFAULT_ICON}</span>
      <h1>{wish.name}</h1>
    </div>
  );
};
