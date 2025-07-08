import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
import food7 from "../assets/food7.png";

export default function SubMidle() {
  const myArr = [
    { id: food1, value: "Chicken-Biryani" },
    { id: food2, value: "Alu-paratha" },
    { id: food3, value: "Puri" },
    { id: food4, value: "Gulab-Jamun" },
    { id: food5, value: "Chola-Bathura" },
    { id: food6, value: "Fish" },
    { id: food7, value: "Ice-Cream" },
  ];

  return (
    // .......................................................UPAR................................................
    <div className="w-screen  h-[200px] ">
      <div className="w-[80%] mx-auto flex justify-between ">
        {/* uper wale 2 heading  */}
        <div>
          <p className="font-bold text-xl">What is on yor mind ?</p>
        </div>
        <div className="flex gap-4">
          <FaRegArrowAltCircleLeft className="text-3xl" />
          <FaRegArrowAltCircleRight className="text-3xl" />
        </div>
      </div>
      <br />
      <br />
      {/* ...........................................................NICHA........................................ */}
      <div className="w-[80%] mx-auto flex gap-12 shadow-md shadow-gray-300 h-full">
        
        {myArr.map((data, index) => (
          <div className="flex flex-col gap-3 ml-[20px]" key={index}>
            <div>
              <img
                src={data.id}
                className="w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500"
                alt="food1"
              />
            </div>
            <div className="mx-auto text-gray-400 text-[15px] whitespace-nowrap">
              {data.value}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
