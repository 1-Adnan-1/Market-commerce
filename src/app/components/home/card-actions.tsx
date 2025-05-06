"use client";

import { addToBasket } from "@/app/service/basket-services";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { userId } from "@/app/utils/constants";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CardActions({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleAddToCart = () => {
    setIsLoading(true);
    addToBasket(userId, productId, 1)
      .then(() => {
        toast.success("Ürün Sepete Eklendi");
        router.refresh();
      })
      .finally(() => setIsLoading(false))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleAddToCart}
      className="bg-green-500 rounded-full p-2 text-white cursor-pointer hover:bg-green-600 transition-all shadow-sm hover:shadow-xl disabled:brightness-90"
    >
      {isLoading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        <MdOutlineLocalGroceryStore size={18} />
      )}
    </button>
  );
}
