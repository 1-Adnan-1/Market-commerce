import Link from "next/link";
import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function EmptyCart() {
  return (
    <div className="container mx-auto px-4 py-8 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <MdRemoveShoppingCart className="text-5xl text-gray-500/45 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">
        Sepetini Boş
      </h1>
      <p className="text-gray-600">Sepetinizde henüz ürün bulunmamaktadır.</p>

      <Link
        href="/"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium mt-6 hover:bg-green-700 "
      >
        Hemen Alışverişe Başla
      </Link>
    </div>
  );
}
