import React from "react";

interface Item {
    id: number;
    brand: string;
    title: string;
    price: number;
    quantity: number;
    stock: number;
    thumbnail: string;
    images: string[];
    highlight: string;
    description: string;
    features: string[];
}

interface QuantityProps {
    item: Item;
    qty: number;
    getQty: (a: number) => void;
}

export default function Quantity({ item, qty, getQty }:QuantityProps) {

  const increaseQty = () => {
    getQty(qty + 1);
  }

  const decreaseQty = () => {
    getQty(qty - 1);
  }

  return (
    <div className="border-2 rounded-lg mt-2 flex gap-4 flex flex-row items-center justify-center px-2 p-1">
      <button
        className="font-bold text-lg text-[#CDCDD1] hover:text-[#1E1E1E] hover:cursor-pointer disabled:text-[#CDCDD1]"
        disabled={qty < 1 ? true : false}
        onClick={() => decreaseQty()}
      >
        &minus;
      </button>
      <input
        readOnly
        className="bg-transparent"
        style={{ width: "25px", textAlign: "center" }}
        type="text"
        value={qty}
      />
      <button
        className="font-bold text-lg text-[#CDCDD1] hover:text-[#1E1E1E] hover:cursor-pointer disabled:text-[#CDCDD1]"
        disabled={qty === item?.stock ? true : false}
        onClick={() => increaseQty()}

      >
        &#43;
      </button>
    </div>
  );
}
