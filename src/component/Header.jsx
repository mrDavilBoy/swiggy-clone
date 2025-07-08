import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { FaBox } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdAssignmentInd } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  const [toogle, setToogle] = useState(false);

  const showSideMenu = () => {
    setToogle(true);
  };

  const hideSideBar=()=>{
    setToogle(false);
  };
  return (
    <>
      {/* Toogle block */}
      <div
        className="background w-full h-full fixed duration-500 "
        style={{
          opacity: toogle ? 1 : 0,
          visibility: toogle ? "visible" : "hidden"
          
        }}
        onClick={hideSideBar}
      >
        <div className="w-1/3 bg-white h-screen absolute duration-[400ms]" style={
          {
            left : toogle ? '0%' :'-100%'
          }
        }>

        </div>
      </div>

      <div className="bg-slate-200 w-full h-[60px]">
        <div className="w-[90%] mx-auto flex items-center">
          {/* logo section */}
          <div className="w-[8%] ">
            <img
              src={logo}
              alt="logo"
              className="w-[100px]  h-[50px] hover:w-[110px]  transition-transform duration-150 hover:scale-110 my-1"
            />
          </div>

          {/* Other + icon */}
          <div
            className="w-[10%] font-bold text-[20px] flex items-center gap-1  hover:text-orange-600 "
            onClick={showSideMenu}
          >
            <span className="border-b-2 ">Other</span>
            <RxCaretDown className="text-2xl text-orange-600" />
          </div>

          {/* 6 part content */}
          <div className="w-screen flex justify-end gap-[25px] text-xl font-medium ">
            <div>
              <a href="#" className="flex items-center gap-2 ">
                <FaBox className="text-[15px]" />
                <span className="hover:text-orange-600">Swigy Corporate</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center gap-2 ">
                <IoSearch className="text-[15px]" />
                <span className="hover:text-orange-600">Search</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center gap-2 ">
                <BiSolidOffer className="text-[15px]" />
                <span className="hover:text-orange-600">Offer</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center gap-2 ">
                <LiaHandsHelpingSolid className="text-[15px]" />
                <span className="hover:text-orange-600">Help</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center gap-2 ">
                <MdAssignmentInd className="text-[15px]" />
                <span className="hover:text-orange-600">Sign In</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center gap-2 ">
                <IoCartOutline className="text-[15px]" />
                <span className="hover:text-orange-600">Cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
