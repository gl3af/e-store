"use client";

import Link from "next/link";
import {Circle, ShoppingCart} from "lucide-react";
import {useCart} from "@/lib/hooks/useCart";
import {useAppSelector} from "@/store/hooks";

const CartLink = () => {
  useCart();
  const cart = useAppSelector(state => state.cart.items);
  const cartAmount = cart.length;

  return (
    <Link
      href="/cart"
      className="hover:text-primary relative"
    >
      <ShoppingCart/>
      {cartAmount > 0 &&
        <Circle
          color="orange"
          fill="orange"
          className="absolute -top-1 -right-1.5 z-10 w-2 h-2 p-0"
        />}
    </Link>
  );
};

export default CartLink;