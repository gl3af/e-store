"use client";

import {useAppSelector} from "@/store/hooks";

import {useCart} from "@/lib/hooks/useCart";

import Main from "@/components/main";
import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import CartList from "@/components/cart-list";
import NoCart from "@/components/no-cart";
import CartOrder from "@/components/cart-order";

const Page = () => {
  useCart();
  const cart = useAppSelector(state => state.cart.items);

  if (!cart.length) return <NoCart />

  return (
    <Main>
      <Container>
        <p className="font-normal text-center text-xl pb-4 md:w-4/5 mx-auto">
          We are experiencing shipping delays due to volume and carrier availability.
          We apologize for any trouble this may cause.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
          <div className="flex flex-col items-center gap-4">
            <PageTitle title="Cart" />
            <CartList cart={cart} />
          </div>
          <div>
            <PageTitle title="Order" />
            <CartOrder cart={cart} />
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Page;