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
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      <button
        disabled={qty < 1 ? true : false}
        onClick={() => decreaseQty()}
      >
        &minus;
      </button>
      <input
        readOnly
        style={{ width: "25px", textAlign: "center" }}
        type="text"
        value={qty}
      />
      <button
        disabled={qty === item.stock ? true : false}
        onClick={() => increaseQty()}

      >
        &#43;
      </button>
    </div>
  );
}
