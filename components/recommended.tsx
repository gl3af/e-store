import React from 'react';
import {store} from "@/store";
import ProductList from "@/components/product-list";

const Recommended = () => {
  // Fake recommendations
  const products = store.getState().categories.products.slice(0, 8);

  return <ProductList products={products} />;
};

export default Recommended;