import Cartİtem from "@/app/components/cart/cartItem";
import CartSummary from "@/app/components/cart/cartSummary";

import ClearBtn from "@/app/components/cart/clearBtn";
import EmptyCart from "@/app/components/cart/emptyCart";
import { getBasket } from "@/app/service/basket-services";
import { userId } from "@/app/utils/constants";
export default async function Cart() {
  const { cart } = await getBasket(userId);

  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Alışveriş Sepeti
      </h1>

      <div className="lg:flex gap-6">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="flex items-center justify-between border-gray-500 p-4 border-b-2">
              <h2 className="text-lg font-semibold">
                Sepetiniz ({cart.items.length} Ürün)
              </h2>

              <ClearBtn />
            </div>
            <ul className="divide-y divide-gray-200">
              {cart.items.map((item, key) => (
                <Cartİtem key={key} item={item} />
              ))}
            </ul>
          </div>
        </div>
        <CartSummary cart={cart} />
      </div>
    </div>
  );
}
