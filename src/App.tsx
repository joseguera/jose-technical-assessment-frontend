import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import BagQty from "./components/BagQty";
import { products } from "./productsAPI";
import logo_light from "./assets/Icons/logo.svg"
import logo_dark from "./assets/Icons/logo_dark.svg"
import cartIcon from "./assets/Icons/cart-icon.svg"
import instagram from "./assets/Social Icons/White/Instagram.svg"
import twitter from "./assets/Social Icons/White/Twitter.svg"
import youtube from "./assets/Social Icons/White/Youtube.svg"
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

function App() {
  const [shoppingItems, setShoppingItems] = useState(products);
  const [cartItems, setCartItems] = useState({});
  const [qty, setQty] = useState(0);

  const currYear: number = new Date().getFullYear();

  function getQty (newQty:number) {
    setQty(newQty)
  }

  function updateItemQty(item: Item, qty: number) {
    const newQty = shoppingItems.filter((product) => product.id === item.id);
    const rest = shoppingItems.filter((product) => product.id !== item.id);
    newQty[0].quantity = qty;
    const newList = [...rest, newQty[0]];
    newList.sort((a, b) => a.id - b.id);
    setShoppingItems(newList);
  }

  function addToBag(item: Item, qty: number) {
    let prevQty: number;
    setCartItems(
      (prevItems: Array<Item>) => (
        qty !== 0 && (
          (prevQty =
            prevItems[item.id] === undefined ? 0 : prevItems[item.id].quantity),
          {
            ...prevItems,
            [item.id]: {
              ...item,
              quantity: qty + prevQty
            },
          }
        )
      )
    );
  }
  
  function deleteFromBag(item: Item) {
    const newBag = Object.values(cartItems).filter((cartItem:any) => cartItem.id !== item.id);
    console.log(newBag);
    setCartItems({...newBag});
  }
  console.log(cartItems)

  return (
    <div className="App">
      <header className="App-header bg-white h-28 drop-shadow-md flex justify-center">
        <div className='w-9/12 flex justify-between items-center'>
          <Link to="/" className='hover:cursor-pointer'>
            <div><img src={logo_light} alt="logo" /></div>
          </Link>
          <Link to="/bag">
            <button className='flex gap-4 border-2 border-[#1E1E1E] py-2 px-4 rounded-lg'>
              <img src={cartIcon} alt="logo" />
              <div>View Cart</div>
              <BagQty total={Object.keys(cartItems).length} />
            </button>
          </Link>
        </div>
      </header>
      <Outlet context={{ updateItemQty, addToBag, deleteFromBag, shoppingItems, cartItems, qty, getQty }} />
      <footer className='bg-[#1E1E1E] flex flex-row justify-center w-full h-28'>
        <div className='w-9/12 flex justify-between items-center'>
          <Link to="/" className='hover:cursor-pointer'>
            <div><img src={logo_dark} alt="logo" /></div>
          </Link>
          <div className='text-[#D9DBE1]'>@{currYear} dot.cards text task. All rights reserved</div>
          <div className='flex flex-row gap-2'>
            <div><img className='hover:cursor-pointer' src={instagram} alt="logo" /></div>
            <div><img className='hover:cursor-pointer' src={twitter} alt="logo" /></div>
            <div><img className='hover:cursor-pointer' src={youtube} alt="logo" /></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
