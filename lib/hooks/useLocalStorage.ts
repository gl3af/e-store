"use client";

import {useCallback} from "react";

export const useLocalStorage = <T>(key: string) => {
  const get = useCallback(() => {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem(key) || "[]";
      return JSON.parse(raw) as T;
    }
    return [];
  }, [key])

  return {get};
}
