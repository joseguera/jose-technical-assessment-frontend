import React, { useState } from "react";
import left from "../assets/Icons/left.svg"
import right from "../assets/Icons/right.svg"
import inactive from "../assets/Icons/Ellipse 69.svg"
import active from "../assets/Icons/Ellipse 70.svg"

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

interface ImageCarouselProps {
    item: Item
}

export default function ImageCarousel({ item }:ImageCarouselProps) {
  const [count, setCount] = useState(0);
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);

  const getCarouselCount = (direction:string) => {
    if (direction === "forward") {
      setCount((prevCount) => {
        return prevCount < item.images.length - 1 ? prevCount + 1 : 0;
      });
    }
    if (direction === "backward") {
      setCount((prevCount) => {
        return prevCount ? prevCount - 1 : item.images.length - 1;
      });
    }
  };

  function arrowActive(direction:string):void {
    if (direction === "right") setRightArrow(true)
    if (direction === "left") setLeftArrow(true)
  }

  function arrowInactive(direction:string):void {
    if (direction === "right") setRightArrow(false)
    if (direction === "left") setLeftArrow(false)
  }

  function getImage(slide:number):void {
    if (slide === 0) setCount(0) 
    if (slide === 1) setCount(1) 
    if (slide === 2) setCount(2) 
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img
        src={item?.images[count]}
        alt={item?.title}
        className="w-full h-72"
      />
      <div className="flex flex-row justify-center items-center gap-4">
        <button onClick={() => getCarouselCount("backward")} onMouseOver={() => arrowActive("left")} onMouseOut={() => arrowInactive("left")}>
            {
                leftArrow ? <img src={right} alt="right arrow dark" className="rotate-180" /> : <img src={left} alt="left arrow" />
            }
        </button>
        <button onClick={() => getImage(0)}>
            <img src={count === 0 ? active : inactive} alt="progress bar" />
        </button>
        <button onClick={() => getImage(1)}>
            <img src={count === 1 ? active : inactive} alt="progress bar" />
        </button>
        <button onClick={() => getImage(2)}>
            <img src={count === 2 ? active : inactive} alt="progress bar" />
        </button>
        <button onClick={() => getCarouselCount("forward")} onMouseOver={() => arrowActive("right")} onMouseOut={() => arrowInactive("right")}>
            {
                rightArrow ? <img src={right} alt="right arrow dark" /> : <img className="rotate-180" src={left} alt="right arrow light" />
            }
        </button>
      </div>
    </div>
  );
}
