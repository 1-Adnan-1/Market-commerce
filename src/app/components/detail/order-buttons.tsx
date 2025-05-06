"use client";

import { addToBasket, checkoutSingleItem } from "@/app/service/basket-services";
import { product } from "@/app/types";
import { userId } from "@/app/utils/constants";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

export default function OrderButtons({ grocery }: { grocery: product }) {
  const [quantity, setIsQuantity] = useState(1);
  const [isLoading, SetIsLoading] = useState(false);

  //Sepete Ekle
  const handleAddToCart = async () => {
    if (quantity < 1 || grocery.stock < quantity) return;
    SetIsLoading(true);
    try {
      await addToBasket(userId, grocery._id, quantity);
      setIsQuantity(1);
      toast.success(`${quantity} Kilo/Adet ${grocery.name} Sepete Eklendi`);
    } catch (error) {
      console.log(error);
      toast.error("Ürün Sepete Eklenemedi");
    } finally {
      SetIsLoading(false);
    }
  };

  // Satın al
  const handleBuyNow = async () => {
    if (quantity < 1 || grocery.stock < quantity) return;
    try {
      // gelen url i al
      const { url } = await checkoutSingleItem(grocery, quantity);
      SetIsLoading(true);
      // Yeni sekmede aç
      window.open(url, "_blank");
      // Sıfırla
      setIsQuantity(1);
    } catch (error) {
      console.log(error);
      toast.error("Ödeme İşlemi Başlatılamadı!");
    } finally {
      SetIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={() => setIsQuantity(quantity - 1)}
            disabled={quantity <= 1}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaMinus />{" "}
          </button>
          <span className="px-3 py-2 border-x border-gray-300 min-w-[40px] text-center cursor-pointer">
            {quantity}
          </span>
          <button
            onClick={() => setIsQuantity(quantity + 1)}
            disabled={quantity >= grocery.stock}
            className="px-3 py-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPlus />
          </button>
        </div>
        <span className="text-gray-500">Stok: {grocery.stock}</span>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          disabled={isLoading}
          onClick={handleAddToCart}
          className="flex bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 h-10 px-4 rounded-md font-medium items-center justify-center flex-1 gap-2 disabled:opacity-50 cursor-pointer transition disabled:bg-gray-100"
        >
          {isLoading ? (
            <FaSpinner className="animate-spin " />
          ) : (
            <>
              <FaShoppingCart />
              Sepete Ekle
            </>
          )}
        </button>
        <button
          disabled={isLoading}
          onClick={handleBuyNow}
          className="flex-1 flex items-center justify-center bg-green-600 text-white hover:bg-green-700 h-10 px-4 rounded-md disabled:opacity-80 transition"
        >
          {isLoading ? (
            <FaSpinner className="animate-spin " />
          ) : (
            <>Hemen Satın Al</>
          )}
        </button>
      </div>
    </div>
  );
}
