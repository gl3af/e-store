import React from "react";
import {Product} from "@/types";

import Image from "next/image";
import Link from "next/link";

import {Card, CardContent, CardFooter} from "@/components/ui/card";

const ProductCard = ({product}: { product: Product }) => {
  return (
    <div className="rounded-lg focus:ring-2 ring-primary transition duration-200 border-0">
      <Card className="pt-6 h-full border-0">
        <CardContent>
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
            <Image
              fill
              priority
              src={product.image}
              alt={product.title}
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <div>
            <p className="capitalize">{product.category}</p>
            <Link
              href={`/products/${product.id}`}
              className="font-semibold text-lg hover:text-primary transition-colors"
            >
              {product.title}
            </Link>
          </div>
          <p className="font-semiboldbold text-lg">${product.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;