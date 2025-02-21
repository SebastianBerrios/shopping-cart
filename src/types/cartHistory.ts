import { CartItem } from "./cartItem";

export interface CartHistory {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
}
