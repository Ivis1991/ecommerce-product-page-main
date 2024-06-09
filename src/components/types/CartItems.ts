import Product from "./Product";

type CartItems = Product & {
  productCounter: number;
};

export default CartItems;