import React from 'react';
import BreadCrum from '../../common/BreadCrum';

export default function AddMaterials() {
  let funObj = "Add Materials"
  return (
    <div className='mx-[20px]'>
            <BreadCrum funObj={funObj} />
            <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
                <div className='bg-gray-300 p-[20px] rounded-[8px]'>
                    <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
                </div>

                {/* input box */}

                <div className='m-[20px]'>
                    <form>
                        <h3 className='my-[10px] font-medium text-[14px]'>Category Name</h3>
                        <input type='text' className='p-[8px] text-[14px] rounded-[8px] border border-gray-400 text-gray-500 w-full' placeholder='Category Name' />
                        
                        <h3 className='my-[10px] font-medium text-[14px]'>Order</h3>
                        <input type='number' className='p-[8px] text-[14px] rounded-[8px] border border-gray-400 text-gray-500 w-full' placeholder='Order'/>

                        <button className='p-[10px_16px] rounded-[8px] text-white bg-sky-500 my-[30px] cursor-pointer '>Add Meterial</button>
                    </form>
                </div>
                {/* input box end */}
            </div>

        </div>
 );
}
