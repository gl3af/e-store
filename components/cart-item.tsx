"use client";

import { CartItem } from "@/types";
import Image from "next/image";

import { useAppDispatch } from "@/store/hooks";
import {
  decreaseAmount,
  increaseAmount,
  removeItem,
} from "@/store/slices/cartSlice";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CartItem = ({ cartItem }: { cartItem: CartItem }) => {
  const { item, amount } = cartItem;
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pb-4 border-b-2 last:border-b-0">
      <div className="relative aspect-square w-full">
        <Image
          fill
          priority
          src={item.image}
          alt={item.title}
          className="aspect-square object-obtain rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-4 relative justify-center items-center px-4">
        <Button
          className="absolute right-0 top-0 p-0.5 md:p-2 h-6 w-6 md:h-9 md:w-9"
          variant="outline"
          size="icon"
          onClick={() => dispatch(removeItem(cartItem))}
        >
          <X className="w-full h-full" />
        </Button>
        <h2 className="text-primary text-xl text-center lg:text-2xl font-bold">
          {item.title}
        </h2>
        <p className="text-xl font-semibold">${item.price}</p>
        <div className="flex gap-x-4 items-center">
          <Button
            disabled={amount === 1}
            className="rounded-full aspect-square w-8 h-8 after:content-['-']"
            variant="destructive"
            size="sm"
            onClick={() => dispatch(decreaseAmount(cartItem))}
          />
          <p className="text-xl">{amount}</p>
          <Button
            variant="default"
            size="icon"
            className="rounded-full aspect-square w-8 h-8 after:content-['+']"
            onClick={() => dispatch(increaseAmount(cartItem))}
          />
        </div>
        <p className="text-xl font-semibold">Total: ${item.price * amount}</p>
      </div>
    </div>
  );
};

export default CartItem;
