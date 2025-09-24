import React from 'react';
import BreadCrum from '../../common/BreadCrum';
import { LuPencilLine } from 'react-icons/lu'

export default function Orders() {
  let funObj = "Orders"
  return (
    <div className='mx-[20px]'>
            
    <BreadCrum funObj={funObj} />
    <div className='my-[20px] border border-gray-400 rounded-[8px] '>
        <div className='bg-gray-300 p-[15px] rounded-t-[8px]'>
            <h2 className='text-[30px] font-bold font-serif'>Order's List</h2>
        </div>
        <div className='my-[20px]'>

            {/*table draw */}

            <div class="relative overflow-x-auto ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='uppercase text-[15px]'>

                            <th scope="col" class="px-6 py-3 rounded-s-lg flex gap-[10px] items-center ">
                                <button className='p-[10px_16px] text-white bg-sky-500 rounded-[5px] cursor-pointer duration-200 border border-white hover:border hover:border-red-500 hover:bg-black '>Delete</button>
                            </th>
                            
                            <th scope="col" class="px-6 py-3 text-center">
                                S.NO
                            </th>
                            <th scope="col" class="px-6 py-3 text-center ">
                               Order ID
                            </th>

                            <th scope="col" class="px-6 py-3  text-center">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3  text-center">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                               Price
                            </th>
                            <th scope="col" class="px-6 py-3 text-center ">
                                Date
                            </th>

                            <th scope="col" class="px-6 py-3  text-center">
                                status
                            </th>
                            <th scope="col" class="px-6 py-3  text-center">
                                view
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800">

                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[10px] items-center ">
                                <input type='checkbox' className='mt-[10px]' />
                            </th>

                            <td class="px-6 py-4 text-center">
                                1
                            </td>
                            <td class="px-6 py-4 text-center">
                                frank.no
                            </td>
                            
                            <td class="px-6 py-4 text-center">
                                Roshan Chaurasia
                            </td>
                            
                            <td class="px-6 py-4 text-center">
                                2
                            </td>
                            
                            <td class="px-6 py-4 text-center">
                                ₹ 3500
                            </td>
                            <td class="px-6 py-4 text-center">
                                10/06/2024
                            </td>
                            
                            <td class="px-6 py-4 text-center">
                                Processing...
                            </td>

                            <td class="px-6 py-4 text-center">
                                <button className=' hover:border-gray-400 font-medium duration-200 border border-gray-300 p-[10px_14px] bg-gray-200  text-[15px] rounded-[20px] cursor-pointer font-serif'>View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* table end*/}
        </div>

    </div>
</div>

  );
}
