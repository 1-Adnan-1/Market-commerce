import Link from "next/link";
import { IoIosCheckmarkCircle as Checkmark } from "react-icons/io";

export default function Success() {
  return (
    <div className="h-[80vh]">
      <div className="h-[50%] bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Checkmark className="text-[70px]" />
          <p className="font-semibold text-3xl text-center">
            Ödemeniz başarıyla gerçekleştirildi
          </p>
        </div>
      </div>

      <div className="h-[50%] p-10 mt-5 text-center text-black">
        <p className="text-lg">
          Siparişiniz kısa süre içinde teslim edilecektir.
        </p>
        <p className="mt-5 mb-10 text-zinc-800">
          Detaylar için e-postanızı kontrol edebilirsiniz.
        </p>
        <Link
          href="/orders"
          className="border shadow transition py-2 px-5 rounded-lg text-lg hover:shadow-lg"
        >
          Siparişlerim
        </Link>

        <br />
        <br />
        <br />

        <Link
          href="/"
          className="border shadow transition py-2 px-5 rounded-lg text-lg hover:shadow-lg"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
}
