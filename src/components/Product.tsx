import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import Quantity from "./Quantity";

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

interface ProductProps {
    item: Item;
    addToBag(a: Item, b: number): void;
    updateItemQty(a: Item, b: number): void;
}

export default function Product({ item, addToBag, updateItemQty }:ProductProps) {
  const [qty, setQty] = useState(0)

  function getQty (newQty:number) {
    setQty(newQty)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        height: "400px",
        border: "1px solid black",
      }}
    >
      <ImageCarousel item={item} />
      <Link to={`/product/${item.title}`}>
        <h3>{item.brand}</h3>
      </Link>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <Quantity item={item} qty={qty} getQty={getQty} />
      <p>{item.description}</p>
      <button
        onClick={() => {addToBag(item, qty); updateItemQty(item, qty)}}
      >
        Add to Cart
      </button>
    </div>
  );
}
