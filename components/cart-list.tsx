import {Cart} from "@/types";
import CartItem from "@/components/cart-item";

const CartList = ({cart}: {cart: Cart}) => {
  return (
    <section className="flex flex-col justify-center gap-6 border p-4 rounded-md shadow-md">
      {
        cart.map(cartItem => (
          <CartItem key={cartItem.item.id} cartItem={cartItem} />
        ))
      }
    </section>
  );
};

export default CartList;