import {createListenerMiddleware, isAnyOf} from '@reduxjs/toolkit';
import {RootState} from "@/store";

import {increaseAmount, decreaseAmount, addItem, removeItem} from "./slices/cartSlice";
import {like, dislike} from "./slices/likedSlice";

export const cartListenerMiddleware = createListenerMiddleware();

cartListenerMiddleware.startListening({
  matcher: isAnyOf(increaseAmount, decreaseAmount, addItem, removeItem),
  effect: (action, listenerApi) =>
    localStorage.setItem("cart", JSON.stringify((listenerApi.getState() as RootState).cart.items))
});

export const likedListenerMiddleware = createListenerMiddleware();

likedListenerMiddleware.startListening({
  matcher: isAnyOf(like, dislike),
  effect: (action, listenerApi) =>
    localStorage.setItem("liked", JSON.stringify((listenerApi.getState() as RootState).liked.liked))
});