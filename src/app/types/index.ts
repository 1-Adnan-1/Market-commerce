//ürünler
type product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: number;
};

//sepet
type Cart = {
  message: string;
  cart: {
    _id: string;
    userId: string;

    items: {
      grocery: product;
      quantity: number;
      price: number;
      name: string;
      _id: string;
    }[];

    totalAmount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

//Tek bir ürün
type SingleCheckoutResponse = {
  url: string;
};
// Sepetteki ürünler
type GetBasketResponse = {
  cart: {
    _id: string;
    userId: string;
    items: {
      grocery: product;
      quantity: number;
      price: number;
      name: string;
      _id: string;
    }[];

    totalAmount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

type Messageresponse = {
  message: string;
};

type GetProdutsResponse = {
  groceries: product[];
};
type GetProdutResponse = {
  grocery: product;
};
export type {
  product,
  GetProdutsResponse,
  GetProdutResponse,
  Cart,
  SingleCheckoutResponse,
  GetBasketResponse,
  Messageresponse,
};
