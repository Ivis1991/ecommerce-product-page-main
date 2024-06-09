import { create } from "zustand";
import CartItems from "../types/CartItems";
import Product from "../types/Product";

export type AuthStoreState = {
  cartItems: CartItems[];
};

export type AuthStoreActions = {
  incrementProduct: (productTypeItems: number) => number;
  decrementProduct: (productTypeItems: number) => number;
  addItemToCart: (item: Product) => void;
};

export type AuthStore = AuthStoreState & AuthStoreActions;




