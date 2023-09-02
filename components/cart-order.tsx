"use client";

import {Cart} from "@/types";

import OrderForm from "@/components/order-form";

const CartOrder = ({cart}: {cart: Cart}) => {
  const totalCartValue = cart.reduce((sum, value) => sum + value.item.price * value.amount, 0);

  return (
    <section className="pt-6 p-4 flex flex-col justify-center gap-4">
      <p className="font-medium text-lg text-center">
        Please leave your email in the field below. Email will be used to notify about status changes
      </p>
      <p className="font-semibold text-xl text-center">Your total: ${totalCartValue}</p>
      <OrderForm />
    </section>
  );
};

export default CartOrder;