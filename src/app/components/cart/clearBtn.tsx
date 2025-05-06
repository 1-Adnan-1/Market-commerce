"use client";

import { clearCartItem } from "@/app/service/basket-services";
import { userId } from "@/app/utils/constants";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Loader from "../loader";
import { useRouter } from "next/navigation";

export default function ClearBtn() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClearCart = async () => {
    setIsLoading(true);
    await clearCartItem(userId);
    router.refresh();
    setIsLoading(false);
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleClearCart}
      className="text-red-500 hover:text-red-700 flex items-center gap-2 text-sm cursor-pointer"
    >
      {isLoading ? <Loader designs="text-red-600" /> : <FaTrash />}

      <p>Sepeti Boşalt</p>
    </button>
  );
}
