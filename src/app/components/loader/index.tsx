import React from "react";
import { FaSpinner } from "react-icons/fa";

type Props = {
  designs?: string;
};

export default function Loader({ designs }: Props) {
  return (
    <div className="flex justify-center items-center">
      <FaSpinner className={`animate-spin text-green-500 ${designs}`} />
    </div>
  );
}
