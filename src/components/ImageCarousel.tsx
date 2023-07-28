import React, { useState } from "react";

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

interface ImageCarouselProps {
    item: Item
}

export default function ImageCarousel(props:ImageCarouselProps) {
  const [count, setCount] = useState(0);

  const getCarouselCount = (direction:string) => {
    if (direction === "forward") {
      setCount((prevCount) => {
        return prevCount < props.item.images.length - 1 ? prevCount + 1 : 0;
      });
    }
    if (direction === "backward") {
      setCount((prevCount) => {
        return prevCount ? prevCount - 1 : props.item.images.length - 1;
      });
    }
  };

  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      <button onClick={() => getCarouselCount("backward")}>&larr;</button>
      <img
        src={props.item.images[count]}
        alt={props.item.title}
        style={{ width: "100px" }}
      />
      <br />
      <button onClick={() => getCarouselCount("forward")}>&rarr;</button>
    </div>
  );
}
