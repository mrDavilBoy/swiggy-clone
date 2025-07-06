import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
   <>
   <div className='bg-slate-200 w-full'>
        <div className='w-[90%] mx-auto  flex items-center'>
           
           {/* logo section */}
            <div className='w-[8%] '>
                <img src={logo} alt="logo" className="w-[100px] h-[50px] hover:w-[110px] hover:h-[55px]"/>
            </div>

            <div className='w-[5%] font-bold text-[20px] border-b-black border-b-2'>
               Other
            </div>

        </div>
   </div>
   </>
  )
}
