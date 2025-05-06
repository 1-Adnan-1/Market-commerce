import { getProducts } from "@/app/service/Product-service";
import { product } from "@/app/types";
import Card from "./card";

export default async function Products() {
  const { groceries } = await getProducts();

  // Ürünler kategorilerine göre gruplanıyor
  const groupProdutcs = groceries.reduce<Record<string, product[]>>(
    (groups, product) => {
      const category = product.category; // Ürünün kategorisi alınır

      // Eğer bu kategori daha önce eklenmemişse, yeni bir dizi oluşturulur
      if (!groups[category]) {
        groups[category] = [];
      }

      // Ürün, ait olduğu kategori grubuna eklenir
      groups[category].push(product);

      return groups;
    },
    {}
  );

  return (
    <div className="text-black flex flex-col gap-10 mt-3">
      {Object.keys(groupProdutcs).map((category) => {
        return (
          <div key={category}>
            <h2 className="text-3xl font-bold text-black mb-5">{category}</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {groupProdutcs[category].map((product) => (
                <Card key={product._id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
