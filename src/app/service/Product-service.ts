import { GetProdutResponse, GetProdutsResponse } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Bütün ürün
const getProducts = async (): Promise<GetProdutsResponse> => {
  const res = await fetch(`${BASE_URL}/api/groceries`);

  return res.json();
};
// Belirli ürün (Seçilen)
const getProduct = async (id: String): Promise<GetProdutResponse> => {
  const res = await fetch(`${BASE_URL}/api/groceries/${id}`);

  return res.json();
};

export { getProducts, getProduct };
