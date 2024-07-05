
import { IEvent } from "../../event";

export interface IWish {
  id: string;
  name: string;
  description?: string;
  link?: string;
  price?: number;
  icon?: string;
  event: IEvent;
}