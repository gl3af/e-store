
import {Product} from "@/types";

import Main from "@/components/main";
import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import ProductList from "@/components/product-list";
import NotFound from "next/dist/client/components/not-found-error";
import {getProductsByCategory} from "@/lib/requests";

const filterProductsByCategory = (products: Product[], category: string): Product[] => {
  return products.filter(product => product.category === category);
}

const Page = async ({params}: {params: {category: string}}) => {
  const category = params.category.replace("%20", " ");
  const products = await getProductsByCategory(category);
  const filteredProducts = filterProductsByCategory(products, category);

  if (!products) return <NotFound />

  return (
    <Main>
      <Container>
        <PageTitle title={category} />
        <ProductList products={filteredProducts} />
      </Container>
    </Main>
  );
};

export default Page;