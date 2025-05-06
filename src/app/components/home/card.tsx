import { product } from "../../types";
import { TbWeight } from "react-icons/tb";
import CardActions from "./card-actions";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";

export default function Card({ product }: { product: product }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md overflow-hidden">
      <Link href={`/grocery/${product._id}`}>
        <div className="relative h-55 overflow-hidden">
          <Image
            src={product.photo}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.isOrganic && (
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs py-1 px-2 rounded-full flex items-center gap-2">
              <FaLeaf />
              <span>Organik</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.origin}</p>
          </div>
          <div className="flex items-center gap-1 text-sm bg-gray-200 px-2 py-1 rounded">
            <TbWeight />
            <span>{product.unit}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 h-10 mb-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-green-700 font-bold text-xl">{product.price}₺</p>
          <CardActions productId={product._id} />
        </div>
      </div>
    </div>
  );
}
