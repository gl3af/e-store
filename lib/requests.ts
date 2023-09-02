import {Product} from "@/types";
import {store} from "@/store";
import axios from "axios";

export const getProduct = async (id: number): Promise<Product> => {
  const products = store.getState().categories.products;
  let product = products.find(product => product.id === id);

  if (!product) {
    const {data} = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
    product = data;
  }
  return product;
}

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  let products = store.getState().categories.products
    .filter(product => product.category === category);

  if (!products.length) {
    const {data} = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
    products = data;
  }

  return products;
}
