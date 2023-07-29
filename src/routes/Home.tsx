import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Product from "../components/Product";
import hero from "../assets/images/hero.png"

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
interface BagContext {
    addToBag: (a: Item, b: number) => void;
    updateItemQty: (a: Item, b: number) => void;
    shoppingItems: Array<Item>;
    item: Item;
}

export default function Home() {
    const context: BagContext = useOutletContext();

    return (
        <div className="flex flex-col items-center justify-center mb-24">
            <div className="w-9/12">
                    <div className="mt-8"><img src={hero} alt="hero shoe" /></div>
                <div className="self-start my-8"><h2 className="font-heading font-bold text-2xl">Explore our latest drops</h2></div>
                <div className="flex justify-center items-center w-full gap-4 mb-8">
                    {context.shoppingItems.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                item={item}
                                addToBag={context.addToBag}
                                updateItemQty={context.updateItemQty}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
