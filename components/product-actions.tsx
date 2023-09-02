"use client";

import {Product} from "@/types";

import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {addItem} from "@/store/slices/cartSlice";

import {Button} from "@/components/ui/button";
import {toast} from "@/components/ui/use-toast";
import {Heart} from "lucide-react";
import React from "react";
import {useLiked} from "@/lib/hooks/useLiked";
import {dislike, like} from "@/store/slices/likedSlice";

const ProductActions = ({product} : {product: Product}) => {
  useLiked();
  const likedProducts = useAppSelector(state => state.liked.liked);
  const isLiked = !!likedProducts.find(item => item.id === product.id);

  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isLiked) {
      dispatch(dislike(product));
      return;
    }

    dispatch(like(product));
  }

  const addToCart = () => {
    dispatch(addItem(product));
    toast({ title: "Product added to a cart" })
  }

  return (
    <div className="flex gap-x-4">
      <Button onClick={addToCart}>Add to cart</Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="p-2 border-0"
        onClick={e => handleClick(e)}
      >
        <Heart
          className="transition-colors duration-300"
          fill={isLiked ? "red" : "transparent"}
          color={isLiked ? "red": "currentColor"}
        />
      </Button>
    </div>
  );
};

export default ProductActions;