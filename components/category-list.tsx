import React from 'react';
import {store} from "@/store";
import Link from "next/link";

const CategoryList = () => {
  const categories = store.getState().categories.categories;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 aspect-square md:w-4/5 lg:w-3/5 mx-auto pb-4">
      {
        categories.map(category => (
          <Link
            href={`categories/${category}`}
            key={category}
            className="flex justify-center items-center bg-gradient-to-r from-primary to-yellow-500 group min-w-[200px] aspect-square"
          >
            <p className="group-hover:-translate-y-2 transition text-lg font-bold">
              {category}
            </p>
          </Link>
        ))
      }

    </section>
  );
};

export default CategoryList;