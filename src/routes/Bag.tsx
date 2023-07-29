import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import BagItem from "../components/BagItem"
import arrow from '../assets/Icons/arrow-right.svg'

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
interface BagContext {
  updateItemQty: (a: Item, b: number) => void;
  cartItems: CartItems;
  qty: number;
  getQty: (a: number) => void;
  deleteFromBag: (a: Item) => void;
}

export default function Bag() {

  const context: BagContext = useOutletContext();
  const cartItems = context.cartItems;

  return (
    <div className="flex flex-col items-center justify-center mb-24 mt-8">
      <div className="w-9/12 flex flex-row">
        <div className="w-1/2">
          <p className='text-3xl font-bold'>Your Bag</p>
            <BagItem items={cartItems} qty={context.qty} getQty={context.getQty} />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p className='text-3xl font-bold mb-4'>Summary</p>
          <div></div>
          <div className="flex flex-row items-center w-11/12 justify-between gap-24">
            <span className='text-xl font-bold'>Subtotal</span>
            <span>$100</span>
          </div>
          <div className="flex flex-row items-center w-11/12 justify-between gap-24">
            <span className='text-xl font-bold'>Shipping and delivery</span>
            <span>$100</span>
          </div>
          <div className="flex flex-row items-center w-11/12 justify-between gap-24">
            <span className='text-xl font-bold'>Tax</span>
            <span>$100</span>
          </div>
          <div className="flex flex-row items-center w-11/12 justify-between gap-24">
            <span className='text-xl font-bold'>Discount</span>
            <span>$0.00</span>
          </div>
          <hr />
          <div className="flex flex-row items-center w-11/12 justify-between gap-24">
            <span className='text-2xl font-bold'>Total</span>
            <span>$100</span>
          </div>
          <button className='bg-[#1E1E1E] text-white w-11/12 h-12 font-bold rounded-lg hover:drop-shadow-lg active:drop-shadow-xl flex gap-4 items-center justify-center'>
            <span>Checkout</span>
            <img className="pt-1" src={arrow} alt="order submit" />
          </button>
        </div>
      </div>
    </div>
  )
}
