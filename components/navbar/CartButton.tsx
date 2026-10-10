import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

function CartButton() {
  // temp
  const numItemsInCart = 9;

  return (
    <Link
      href="/cart"
      className="relative flex h-10 w-10 items-center justify-center rounded-md bg-black text-white hover:bg-gray-800"
    >
      <LuShoppingCart className="h-5 w-5" />
      <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {numItemsInCart}
      </span>
    </Link>
  );
}

export default CartButton;
