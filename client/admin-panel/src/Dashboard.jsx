import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

import BreadCrum from './Components/common/BreadCrum';

export default function Dashboard() {
  let funObj = "Dashboard"
  return (
    <div className='mx-[20px]'>
    <BreadCrum funObj={funObj} />
    <div className='mt-[20px]'>
        <div className='grid grid-cols-3 gap-[20px] items-center'>
            <div className='bg-[#5956d3] p-[20px] rounded-[5px] h-[200px] '>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold font-serif text-white'><span className='text-[25px]'>26K </span><span className='text-[16px]'>(-12.4% ↓)</span></h2>
                    <BsThreeDotsVertical className='text-white cursor-pointer' />
                </div>
                <h2 className='tex-white text-[22px] font-bold font-serif text-white'>Users</h2>
            </div>
            <div className='bg-[#2998fe] p-[20px] rounded-[5px] h-[200px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold font-serif text-white'><span className='text-[25px]'>$6,200 </span><span className='text-[16px]'>(40.9% ↑)</span></h2>
                    <BsThreeDotsVertical className='text-white cursor-pointer' />
                </div>
                <h2 className='tex-white text-[22px] font-bold font-serif text-white'>Product</h2>

            </div>
            <div className='bg-[#fcb01e] p-[20px] rounded-[5px] h-[200px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold font-serif text-white'><span className='text-[25px]'>2.49% </span><span className='text-[16px]'>(84.7% ↑)</span></h2>
                    <BsThreeDotsVertical className='text-white cursor-pointer' />
                </div>
                <h2 className='tex-white text-[22px] font-bold font-serif text-white'>Category</h2>

            </div>
            <div className='bg-[#e95353] p-[20px] rounded-[5px] h-[200px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold font-serif text-white'><span className='text-[25px]'>44K </span><span className='text-[16px]'> (-23.6% ↓)</span></h2>
                    <BsThreeDotsVertical className='text-white cursor-pointer' />
                </div>
                <h2 className='tex-white text-[22px] font-bold font-serif text-white'>Orders</h2>

            </div>
        </div>
    </div>
</div>
);
}
