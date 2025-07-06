import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
   <>
   <div className='bg-slate-200 w-full '>
        <div className='w-[90%] mx-auto bg-amber-300'>
           
           {/* logo section */}
            <div className='w-[8%] border border-amber-500'>
                <img src={logo} alt="logo" className="w-[100px] h-[50px]"/>
            </div>

            
        </div>
   </div>
   </>
  )
}
