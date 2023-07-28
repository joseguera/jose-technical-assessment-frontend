import React, { useState } from "react";
import { Link } from "react-router-dom";
import BagQty from "../components/BagQty";
import Product from "../components/Product";
import { products } from "../productsAPI";

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

interface HomeState {
    item: Item;
    qty: number;
    addToBag: (a: Item, b: number) => Array<Item>;
    updateItemQty: (a: Item, b: number) => Array<Item>;
}

export default function Home() {
  const [shoppingItems, setShoppingItems] = useState(products);
  const [cartItems, setCartItems] = useState({});

  function updateItemQty(item:Item, qty:number) {
    const newQty = shoppingItems.filter((product) => product.id === item.id);
    const rest = shoppingItems.filter((product) => product.id !== item.id);
    newQty[0].quantity = qty;
    const newList = [...rest, newQty[0]];
    newList.sort((a, b) => a.id - b.id);
    setShoppingItems(newList);
  }

  function addToBag(item:Item, qty:number) {
    let prevQty:number;
    setCartItems(
      (prevItems:Array<Item>) => (
        (prevQty =
          prevItems[item.id] === undefined ? 0 : prevItems[item.id].quantity),
        {
          ...prevItems,
          [item.id]: {
            ...item,
            quantity: qty + prevQty,
          },
        }
      )
    );
  }

  return (
    <>
      <BagQty total={Object.keys(cartItems).length} />
      <div><h2>Explore our latest drops</h2></div>
      <div
        className="App"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          gap: "10px",
        }}
      >
        {shoppingItems.map((item) => {
          return (
            <Product
              key={item.id}
              item={item}
              addToBag={addToBag}
              updateItemQty={updateItemQty}
            />
          );
        })}
      </div>
    </>
  );
}
