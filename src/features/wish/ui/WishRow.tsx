import { IWish } from "@/entities";

interface WishRowProps {
  wish: IWish;
}
export const WishRow = ({ wish }: WishRowProps) => {
  return (
    <div>
      <h3>{wish.name}</h3>
    </div>
  );
};
