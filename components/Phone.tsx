import React from "react";
import { Phone } from "../model/phones";

type Props = {
  phone: Phone;
};
const Phone = ({ phone }: Props) => {
  return (
    <div
      className="
   border-black w-[400px] h-auto mb-12"
    >
      <img className="w-96 h-96" src={phone.img} />
      <p className="font-bold">{phone.title}</p>
      <p className="italic">{phone.description}</p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Phone;
