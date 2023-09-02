"use client";

import {useEffect} from "react";
import {Product} from "@/types";

import {useAppDispatch} from "@/store/hooks";
import {setLiked} from "@/store/slices/likedSlice";

import {useLocalStorage} from "@/lib/hooks/useLocalStorage";

export const useLiked = () => {
  const dispatch = useAppDispatch();
  const {get} = useLocalStorage<Product[]>('liked');

  useEffect(() => {
    const localStorageCart = get();
    dispatch(setLiked(localStorageCart));
  }, [dispatch, get]);
}