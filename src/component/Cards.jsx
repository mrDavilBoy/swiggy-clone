import React, { useState } from "react";
import hamburger from "../assets/hamburger.png";
import mcDonald from "../assets/mcDonald.png";
import pizaCombo from "../assets/pizaCombo.png";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'

export default function Cards() {
  const [slide, setSlide] = useState(0);

  const myArray = [
    { img: hamburger, price: "Just rupes ₹150" },
    { img: mcDonald, price: "Just rupes ₹250" },
    { img: pizaCombo, price: "Just rupes ₹400" },
    { img: hamburger, price: "Just rupes ₹150" },
    { img: mcDonald, price: "Just rupes ₹250" },
    { img: pizaCombo, price: "Just rupes ₹400" },
  ];

  
  const leftSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  
  const rightSlide = () => {
    if (slide < myArray.length - 3) {
      
      setSlide(slide + 1);
    }
  };

  return (
    <div className="w-screen h-[300px] mt-2">
      <div className="w-[80%] mx-auto flex justify-between">
        <div>
          <p className="font-bold text-xl">Top resturant chains in Nashik!</p>
        </div>
        <div className="flex gap-4">
          <FaRegArrowAltCircleLeft className="text-3xl cursor-pointer" onClick={leftSlide} />
          <FaRegArrowAltCircleRight className="text-3xl cursor-pointer" onClick={rightSlide} />
        </div>
      </div>

      {/* CARD SLIDER */}
      <div className="w-[80%] mx-auto overflow-hidden mt-4">
        
        <div
          className="mt-3 flex gap-6 transition-transform duration-300"
          style={{ transform: `translateX(-${slide * 320}px)` }}
        >
          {myArray.map((data, index) => (
            <div
              className="w-[300px] h-[180px] bg-gradient-to-b from-white to-black rounded-xl flex-shrink-0"
              key={index}
            >
              <img
                src={data.img}
                alt="card-item"
                className="w-[300px] h-[150px] object-cover rounded-t-xl"
              />
              <p className="text-white font-bold pl-2">{data.price}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
