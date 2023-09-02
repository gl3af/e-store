"use client";

import {useEffect} from "react";
import {Cart} from "@/types";

import {useAppDispatch} from "@/store/hooks";
import {setCart} from "@/store/slices/cartSlice";

import {useLocalStorage} from "@/lib/hooks/useLocalStorage";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const {get} = useLocalStorage<Cart>('cart');

  useEffect(() => {
    const localStorageCart = get();
    dispatch(setCart(localStorageCart));
  }, [dispatch, get]);
}