import {Product} from "@/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CategoryState = {
  categories: string[];
  products: Product[];
}

const initialState: CategoryState = {
  categories: [],
  products: [],
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    }
  }
})

export const {setCategories, setProducts} = categoriesSlice.actions;
export default categoriesSlice.reducer;

