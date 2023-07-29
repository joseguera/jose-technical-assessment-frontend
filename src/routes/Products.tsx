import React, { useState, useRef, useEffect } from 'react';
import { useOutletContext, useParams } from "react-router-dom";
import ImageCarousel from '../components/ImageCarousel';
import Quantity from '../components/Quantity';

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

interface ProductsContext {
  addToBag: (a: Item, b: number) => void;
  updateItemQty: (a: Item, b: number) => void;
  shoppingItems: Array<Item>;
  qty: number;
  getQty: (a: number) => void;
}

export default function Products() {  
  const context: ProductsContext = useOutletContext();
  let { id } = useParams();
  let currId = Number(id);
  const buttonRef = React.useRef<HTMLElement>(null);

  const product = context.shoppingItems.filter(item => item.id === currId);
  let currItem = product[0];

  useEffect(() => {
    if (context.qty === 0) {
        if (null !== buttonRef.current) buttonRef.current.innerHTML = "Let's add something to the cart!";
    } else {
      if (null !== buttonRef.current) buttonRef.current.innerHTML = "Add to Cart";
    }
  }, [context.qty]);

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="w-9/12 flex flex-col justify-center gap-12">
        <div className='h-80 flex flex-row justify-between gap-8'>
          {/* Square 1 */}
          <div className='w-2/4 h-80'>
            <ImageCarousel item={currItem} />
          </div>
          {/* Square 2 */}
          <div className='w-2/4 h-80 flex flex-col items-start gap-8 pl-8 justify-center'>
            <div className="flex flex-col">
              <h3 className="font-bold text-xl font-heading">{currItem?.brand}</h3>
              <p className="font-body">{currItem?.title}</p>
              <p className="font-bold text-xl"><span>$</span>{currItem?.price}</p>
            </div>
            <div className='w-full border opacity-25 border-zinc-300'></div>
            <div className="flex flex-col">
              <div className='font-bold text-sm'>Quantity</div>
              <Quantity item={currItem} qty={context.qty} getQty={context.getQty} />
            </div>
            <button
              onClick={() => {
                context.addToBag(currItem, context.qty); 
                context.updateItemQty(currItem, context.qty) }}
              className='bg-[#1E1E1E] text-white w-11/12 h-12 font-bold rounded-lg hover:drop-shadow-lg active:drop-shadow-xl'
            >
              <span ref={buttonRef}>Add to Cart</span>
            </button>
          </div>
        </div>
        {/* Square 3 */}
        <div className='h-80 flex flex-row justify-between gap-8'>
          <div className='w-2/4 h-80 flex flex-col gap-4'>
            <div className='font-bold text-xl font-heading '>Description</div>
            <hr />
            <div className=''>
              {currItem?.description}
            </div>
            <div className=''>
              <ul className='list-disc ml-8'>
                {currItem?.features.map(listItem => {
                  return <li key={listItem}>{listItem}</li>
                })}
              </ul>
            </div>
          </div>
          {/* Square 4 */}
          <div className='w-2/4 h-80'>
            <img className="h-full" src={currItem?.highlight} alt="feature"/>
          </div>
        </div>
      </div>
    </div>
  );
}
