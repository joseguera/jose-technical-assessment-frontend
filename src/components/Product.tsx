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
    highlight: string;
    description: string;
    features: string[];
}

interface ProductProps {
    item: Item;
    addToBag(a: Item, b: number): void;
    updateItemQty(a: Item, b: number): void;
}

export default function Product({ item, addToBag, updateItemQty }:ProductProps) {

  return (
    <div className="w-1/4 flex flex-col gap-3 items-start justify-center hover:drop-shadow-lg active:drop-shadow-xl">
      <Link to={`/product/${item.id}/${item.title}`} className="hover:cursor-pointer">
        <img className="w-full h-64" src={item.thumbnail} alt={item.title} />
      </Link>
      <Link to={`/product/${item.id}/${item.title}`} className="decoration-0 hover:cursor-pointer hover:underline hover:decoration-2">
        <h3 className="font-bold text-xl font-heading">{item.brand}</h3>
        <p className="font-body">{item.title}</p>
      </Link>
      <p className="font-bold"><span>$</span>{item.price}</p>
    </div>
  );
}
