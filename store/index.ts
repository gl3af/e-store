import {configureStore} from "@reduxjs/toolkit";

import categoriesReducer from "./slices/categoriesSlice";
import cartReducer from "./slices/cartSlice";
import likedReducer from "./slices/likedSlice";

import {cartListenerMiddleware, likedListenerMiddleware} from "@/store/middleware";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
    liked: likedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cartListenerMiddleware.middleware, likedListenerMiddleware.middleware),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;