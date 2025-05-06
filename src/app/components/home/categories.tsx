import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function Categories() {
  const options = [
    {
      icon: <MdLocalShipping className="text-4xl text-blue-600" />,
      title: "Hızlı Teslimat",
      desc: "Aynı günde teslimat",
      bg: "bg-blue-100/50",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Taze Ürünler",
      desc: "Günlük taze ürünler",
      bg: "bg-green-100/50",
    },
    {
      icon: <BiSolidOffer className="text-4xl text-orange-600" />,
      title: "Hızlı Teslimat",
      desc: "Aynı günde teslimat",
      bg: "bg-orange-100/50",
    },
    {
      icon: <MdLocalShipping className="text-4xl text-purple-600" />,
      title: "Hızlı Teslimat",
      desc: "Aynı günde teslimat",
      bg: "bg-purple-100/50",
    },
  ];
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {options.map((options, key) => (
        <div
          key={key}
          className={`flex items-center gap-3 p-4 ${options.bg} rounded-lg`}
        >
          {options.icon}
          <div>
            <h1 className="font-medium text-gray-800">{options.title}</h1>
            <p className="text-sm text-gray-600">{options.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
