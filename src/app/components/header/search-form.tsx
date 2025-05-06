import { CiSearch } from "react-icons/ci";

export default function SearchForm() {
  return (
    <form className="flex gap-2 py-2 px-4 rounded-full border border-gray-300 md:w-1/2">
      <button className="text-xl text-gray-400">
        <CiSearch />
      </button>
      <input
        className="text-gray-800 outline-none w-full"
        type="text"
        placeholder="Bir Ürün Veya Kategori Arayın"
      />
    </form>
  );
}
