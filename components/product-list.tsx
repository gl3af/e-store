import React from 'react';

import ProductCard from "@/components/product-card";
import {Product} from "@/types";

type ProductListProps = {
  products: Product[];
}

const ProductList = ({products} : ProductListProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </section>
  );
};

export default ProductList;