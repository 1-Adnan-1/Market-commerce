import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 text-white">
      <div className="flex flex-col justify-between p-6 rounded-xl bg-gradient-to-r from-green-600 to-green-700 bg-cover bg-no-repeat">
        <h1 className="text-3xl font-semibold">
          Taze Manav Ürünleri <br /> Kapınıza kadar
        </h1>

        <p className="my-3">
          En taze meyve ve sebzeler elinizin altında. Sağlıklı yaşamın ilk adımı
          sizden başlıyor.
        </p>
        <Link
          href="/"
          className="bg-white inline-block w-fit text-green-700 py-2 px-4 rounded-md hover:bg-green-100 transition"
        >
          {" "}
          Alişverişe Başla
        </Link>
      </div>{" "}
      <div className=" flex flex-col justify-between p-6 rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 max-lg:hidden bg-cover bg-no-repeat">
        <h1 className="text-3xl font-semibold">
          Organik Ürünler <br /> Uygun Fiyata
        </h1>

        <p className="my-3">
          Doğal ve organik ürünlerle sağlıklı beslenme artık çok kolay
          alışverişe hemen başla
        </p>
        <Link
          href="/"
          className="bg-white inline-block w-fit text-orange-700 py-2 px-4 rounded-md hover:bg-green-100 transition"
        >
          {" "}
          Organik Ürünler
        </Link>
      </div>
    </div>
  );
}
