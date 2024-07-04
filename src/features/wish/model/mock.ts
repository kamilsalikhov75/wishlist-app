import { IWish } from "@/entities";
import { MOCK_EVENTS } from "../../event/model";

export const MOCK_WISHES: IWish[] = [
  {
    id: "1",
    name: "Свитшот",
    event: MOCK_EVENTS[0],
    icon: "👕",
    link: "https://issuewear.com/tproduct/708877549-916886891851-cloudy-sweatshirt",
    price: 4500,
  },
  {
    id: "2",
    name: "Форма для льда",
    event: MOCK_EVENTS[4],
    icon: "🧊",
  },
  {
    id: "3",
    name: "Чипсеки",
    description: "Хочу кушац",
    event: MOCK_EVENTS[4],
    price: 500,
    link: "https://www.wildberries.ru/catalog/226501715/detail.aspx",
  },
];
