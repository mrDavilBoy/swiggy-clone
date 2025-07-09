import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { FaBox } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdAssignmentInd } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export default function Header() {
  const [toogle, setToogle] = useState(false);

  // ye side bar ke chalu karne ke function hai 
  const showSideMenu = () => {
    setToogle(true);
  };

  // ye side bar ko band karne ke function hai 
  const hideSideBar = () => {
    setToogle(false);
  };

  return (
    <>
      {/* Toogle block */}
{/* TOGGLE BLOCK */}
<div
  className="fixed top-0 left-0 w-full h-full z-40 bg-black/50 transition-opacity duration-500"
  style={{
    opacity: toogle ? 1 : 0,
    visibility: toogle ? "visible" : "hidden",
  }}
  onClick={hideSideBar}
>
  {/* SIDEBAR CONTENT */}
  <div
    className="w-1/3 bg-white h-full absolute top-0 left-0 duration-500"
    style={{
      left: toogle ? "0%" : "-100%",
    }}
    onClick={(e) => e.stopPropagation()} // Prevent click from closing sidebar
  >
    <div className="w-[80%] mx-auto mt-[50px] flex flex-col gap-[50px]">
      <ImCross className="text-[25px]" onClick={hideSideBar} />

      <input
        type="text"
        placeholder="Search for area, street, name..!"
        className="border border-gray-300 shadow-md w-full pl-[25px] rounded-md bg-white"
      />

      <div className="border border-gray-300 shadow-md p-2 rounded-md bg-white">
        {/* Ye location ke dabba hai */} GPS
      </div>
    </div>
  </div>
</div>

{/* ye upar wale code sirf side bar ke hai  */}

          {/* Idhar sai apne home navbar hai home page ke  */}
      <div className="w-full h-[60px] border-b-gray-500 shadow-md">
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
