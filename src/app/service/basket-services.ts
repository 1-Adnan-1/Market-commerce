import {
  Cart,
  GetBasketResponse,
  Messageresponse,
  product,
  SingleCheckoutResponse,
} from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Sepete ürün ekle
const addToBasket = async (
  userId: string,
  groceryId: string,
  quantity: number
): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

// Tek bir ürün alma
const checkoutSingleItem = async (
  grocery: product,
  quantity: number
): Promise<SingleCheckoutResponse> => {
  const body = {
    grocery: {
      _id: grocery._id,
      name: grocery.name,
      price: grocery.price,
      description: grocery.description,
    },
    quantity: quantity,
    customerInfo: {
      name: "Adnan Sami",
      phone: "05555555555",
      deliveryAddress: "Bahçeli Mahalle, Meyve Sokak No:45, K.Maraş",
      isDelivery: true,
    },
  };

  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
// Bütün ürünleri al
const checkoutAllItems = async (
  userId: string
): Promise<SingleCheckoutResponse> => {
  const body = {
    userId: userId,
    customerInfo: {
      name: "Adnan Sami",
      phone: "05555555555",
      deliveryAddress: "Bahçeli Mahalle, Meyve Sokak No:45, K.Maraş",
      isDelivery: true,
    },
  };
  const res = await fetch(`${BASE_URL}/api/checkout/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

// Sepetteki ürünleri getir
const getBasket = async (userId: string): Promise<GetBasketResponse> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`);
  return res.json();
};

// Sepetteki ürün ün miktarını güncelle
const updateCartItem = async (
  userId: string,
  groceryId: string,
  quantity: number
): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/api/cart/item`, {
    method: "PUT",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
// Sepetteki ürünü kaldır
const removeCartItem = async (
  userId: string,
  groceryId: string
): Promise<Cart> => {
  const res = await fetch(
    `${BASE_URL}/api/cart/item?userId=${userId}&groceryId=${groceryId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
};
// Sepeti temizle
const clearCartItem = async (userId: string): Promise<Messageresponse> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
export {
  addToBasket,
  checkoutSingleItem,
  getBasket,
  updateCartItem,
  removeCartItem,
  clearCartItem,
  checkoutAllItems,
};
