import React from 'react'
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
  return (
    // .......................................................UPAR................................................
    <div className='w-screen  h-[200px] '>
      <div className='w-[80%] mx-auto flex justify-between '>
        {/* uper wale 2 heading  */}
        <div><p className='font-bold text-xl'>What is on yor mind ?</p></div>
        <div className='flex gap-4'>
            <FaRegArrowAltCircleLeft className='text-3xl'/>
            <FaRegArrowAltCircleRight className='text-3xl'/>
        </div>
      </div><br /><br />
{/* ...........................................................NICHA........................................ */}
      <div className='w-[80%] mx-auto flex gap-12 shadow-md shadow-gray-300 h-full'>
        {/* nicha wale food */}
        <div className='flex flex-col gap-3 ml-[20px]'>
                        <div>
                            <img src={food1} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Chicken-Biryani</div>         
        </div>
                <div className='flex flex-col gap-3'>
                        <div>
                            <img src={food2} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Alu-Paratha</div>         
        </div>
                <div className='flex flex-col gap-3'>
                        <div>
                            <img src={food3} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Puri</div>         
        </div>
                <div className='flex flex-col gap-3'>
                        <div>
                            <img src={food4} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Gulab-Jamun</div>         
        </div>
                <div className='flex flex-col gap-3'>
                        <div>
                            <img src={food5} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Chola-Bathura</div>         
        </div>
                <div className='flex flex-col gap-3'>
                        <div>
                            <img src={food6} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Fish-Fry</div>         
        </div>
                <div className='flex flex-col gap-3'>
                        <div>
                            <img src={food7} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Ice-Cream</div>         
        </div>


{/* 
        <div className='flex flex-col '>
                        <div>
                            <img src={food1} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Chicken-Biryani</div>         
        </div>
                <div className='flex flex-col '>
                        <div>
                            <img src={food2} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Alu-Paratha</div>         
        </div>
                <div className='flex flex-col '>
                        <div>
                            <img src={food3} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Puri</div>         
        </div>
                <div className='flex flex-col '>
                        <div>
                            <img src={food4} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Gulab-Jamun</div>         
        </div>
                <div className='flex flex-col '>
                        <div>
                            <img src={food5} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Chola-Bathura</div>         
        </div>
                <div className='flex flex-col '>
                        <div>
                            <img src={food6} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Fish-Fry</div>         
        </div>
                <div className='flex flex-col '>
                        <div>
                            <img src={food7} className='w-[100px] h-[100px] shadow-md rounded-full shadow-gray-500' alt="food1" />
                        </div>
                        <div className='mx-auto text-gray-400 text-[17px]'>Ice-Cream</div>         
        </div> */}


       
      </div>
    </div>
  )
}
