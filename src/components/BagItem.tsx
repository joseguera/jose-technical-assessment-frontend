import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
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

interface CartItems {
  id: Item;
}

interface BagItemProps {
  items: CartItems;
  qty: number;
  getQty: (a: number) => void;
}


interface BagItemContext {
  addToBag: (a: Item, b: number) => void;
  updateItemQty: (a: Item, b: number) => void;
  item: Item;
}

export default function BagItem({ items, qty, getQty }: BagItemProps) {

  const context: BagItemContext = useOutletContext();

  // function removeFromCart()

  return (
    <div className="w-full flex flex-col items-start gap-8 justify-center mt-8">
      {Object.entries(items).map((item, idx) => {
        return (
          <div className="flex flex-row justify-between items-center">
            <Link to={`/product/${item["1"].id}/${item["1"].title}`} className="hover:cursor-pointer">
              <img className="h-40 mr-4" src={item["1"].thumbnail} alt={item["1"].title} />
            </Link>
            <div className="flex flex-col justify-between items-center gap-4">
              <div className="w-full flex flex-row justify-between gap-8 items-center">
                <Link to={`/product/${item["1"].id}/${item["1"].title}`} className="decoration-0 hover:cursor-pointer hover:underline hover:decoration-2">
                  <h3 className="font-bold text-xl font-heading">{item["1"].brand}</h3>
                </Link>
                <p className="font-bold"><span>$</span>{(item["1"].price * item["1"].quantity).toFixed(2)}</p>
              </div>
              <p className="w-full font-body">{item["1"].title}</p>
              <div className="w-full flex flex-row justify-around items-center mt-4 gap-16">
                <Quantity item={context.item} qty={qty} getQty={getQty} />
                <button><span className="underline decoration-2 font-bold text-bold">Remove</span></button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
