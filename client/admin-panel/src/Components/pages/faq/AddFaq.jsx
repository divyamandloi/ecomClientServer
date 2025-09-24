import React from 'react';
import BreadCrum from '../../common/BreadCrum';

export default function AddFaq() {
  let funObj = "Add Faq's"
  return (
    <div className='mx-[20px]'>
            <BreadCrum funObj={funObj} />
            <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
                <div className='bg-gray-300 p-[20px] rounded-[8px]'>
                    <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
                </div>
                <div className='m-[20px]'>
                    <form>
                        <h3 className='font-medium text-[16px]'>Question</h3>
                        <input type='text' className='w-full p-[10px] text-gray-500 rounded-[8px] border border-gray-400 text-[16px] ' placeholder='question' />
                        <h3 className='font-medium text-[16px] mt-[10px]'>Answer</h3>
                        <textarea className=' w-full rounded-[8px] p-[20px] text-[16px] text-gray-500 border border-gray-400 ' placeholder='answer'></textarea>

                        <h3 className='font-medium text-[16px] mt-[10px]'>Order</h3>
                        <input type='number' className='w-full p-[10px] text-gray-500 rounded-[8px] border border-gray-400 text-[16px] ' placeholder='order' />
                        <button className=' my-[20px_10px] p-[10px_16px] rounded-[8px] bg-sky-500 text-white text-[16px] font-medium cursor-pointer'>Add faq's</button>
                    </form>
                </div>

            </div>

        </div>
  );
}
