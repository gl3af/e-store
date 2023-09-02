import Image from "next/image";
import {Star} from "lucide-react";

import Main from "@/components/main";
import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import ProductActions from "@/components/product-actions";
import {getProduct, getProductsByCategory} from "@/lib/requests";
import ProductList from "@/components/product-list";
import NotFound from "next/dist/client/components/not-found-error";

const Page = async ({params}: { params: { id: string } }) => {
  const id: number = +params.id;

  const product = await getProduct(id);
  if (!product) return <NotFound/>

  const sameCategoryProducts = await getProductsByCategory(product.category);
  const similar = sameCategoryProducts.filter(product => product.id !== id);

  return (
    <Main>
      <Container>
        <div className="grid md:grid-cols-2 gap-6 pb-4">
          <div className="relative aspect-square max-h-1/2">
            <Image
              fill
              priority
              src={product.image}
              alt={product.title}
              className="aspect-square rounded-lg p-4"
            />
          </div>
          <section className="flex flex-col gap-y-6">
            <PageTitle title={product.title}/>
            <p className="text-lg font-medium text-justify">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <Star color="orange" fill="orange"/>
                  <p className="font-medium">{product.rating.rate}</p>
                </div>

                <p>{product.rating.count} reviews</p>
              </div>
              <p className="text-xl font-bold text-primary">{product.price}$</p>
            </div>
            <ProductActions product={product}/>
          </section>
        </div>
        <PageTitle title="Similar"/>
        <ProductList products={similar}/>
      </Container>
    </Main>
  );
};

export default Page;