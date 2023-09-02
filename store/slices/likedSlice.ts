import {Product} from "@/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type LikedState = {
  liked: Product[];
};

const initialState: LikedState = {
  liked: [],
};

const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    setLiked: (state, action: PayloadAction<Product[]>) => {
      state.liked = action.payload;
    },
    like: (state, action: PayloadAction<Product>) => {
      state.liked.push(action.payload);
    },
    dislike: (state, action: PayloadAction<Product>) => {
      state.liked = state.liked.filter(item => item.id !== action.payload.id);
    },
  }
});

export const {setLiked, like, dislike} = likedSlice.actions;
export default likedSlice.reducer;