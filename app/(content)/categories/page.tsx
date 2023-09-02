import axios from "axios";
import {Product} from "@/types";

import {store} from "@/store";
import {setProducts, setCategories} from "@/store/slices/categoriesSlice";

import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import Main from "@/components/main";
import CategoryList from "@/components/category-list";
import Recommended from "@/components/recommended";

export default async function Home() {
  const { data: products } = await axios.get<Product[]>('https://fakestoreapi.com/products');
  const { data: categories } = await axios.get<string[]>('https://fakestoreapi.com/products/categories');

  store.dispatch(setProducts(products));
  store.dispatch(setCategories(categories));

  return (
    <Main>
      <Container>
        <CategoryList />
        <PageTitle title="Recommended" />
        <Recommended />
      </Container>
    </Main>
  )
}
