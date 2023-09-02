import {Cart, CartItem, Product} from "@/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CartState = {
  items: Cart;
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<Product>) => {
      const item = state.items.find(cartItem => cartItem.item.id === action.payload.id);

      if (!!item) {
        item.amount++;
        return;
      }

      state.items.push({
        item: action.payload,
        amount: 1
      });
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(cartItem => cartItem.item.id !== action.payload.item.id);
    },
    increaseAmount: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(cartItem => cartItem.item.id === action.payload.item.id);
      item!.amount++;
    },
    decreaseAmount: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(cartItem => cartItem.item.id === action.payload.item.id);
      item!.amount--;
    },
  }
})

export const {addItem, setCart, removeItem, increaseAmount, decreaseAmount} = cartSlice.actions;
export default cartSlice.reducer;