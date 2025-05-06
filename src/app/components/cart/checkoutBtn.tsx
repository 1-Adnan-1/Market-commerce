"use client";

import { useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Loader from "../loader";
import { userId } from "@/app/utils/constants";
import { checkoutAllItems } from "@/app/service/basket-services";

const CheckoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const { url } = await checkoutAllItems(userId);

      window.location.href = url;
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700 transitio disabled:brightness-70 cursor-pointer disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MdOutlineShoppingCartCheckout />
          Ödemeye Yap
        </>
      )}
    </button>
  );
};

export default CheckoutBtn;
