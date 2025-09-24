import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";


export default function Footer() {
    let year=new Date().getFullYear()
  return (
    <footer className='p-[20px] border-y border-gray-300 mt-[40px] mx-[20px] mb-[10px] '>
       <div className='flex justify-between items-center'>
         <h3 className='flex items-center gap-[5px] font-medium'><FaRegCopyright/>{year} Monsta™. All Rights Reserved.</h3>
         <h3 className='font-medium'><span className='text-gray-500'>Designed by :</span><span className='text-[#256AED] cursor-pointer underline-offset-1'>Wscube Tech.</span></h3>
       </div>

    </footer>
  );
}

