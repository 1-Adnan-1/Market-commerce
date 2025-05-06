"use client"; // Client-side'da çalışacağını belirt

import React, { useEffect, useState } from "react";

interface GroceryItem {
  name: string;
  price: number;
}

export default function Orders() {
  const [purchasedItems, setPurchasedItems] = useState<GroceryItem[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("purchasedItems") || "[]");
    setPurchasedItems(items);
  }, []);

  return (
    <div>
      <h1>Satın Alınan Ürünler</h1>
      {purchasedItems.length > 0 ? (
        <ul>
          {purchasedItems.map((item, index) => (
            <li key={index}>
              <h2>{item.name}</h2>
              <p>{item.price}₺</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Henüz satın alınan ürün yok.</p>
      )}
    </div>
  );
}
