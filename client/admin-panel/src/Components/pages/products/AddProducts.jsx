import React from 'react';
import BreadCrum from '../../common/BreadCrum';
import { IoCloudUploadOutline } from 'react-icons/io5'


export default function AddProducts() {
  let funObj = "Add Products"
  return (
    <div className='mx-[20px]'>
            <BreadCrum funObj={funObj} />
            <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
                <div className='bg-gray-300 p-[20px] rounded-[8px]'>
                    <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
                </div>

                <div className='m-[20px]'>
                    <form onSubmit={''}>
                        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
                            {/* first column start */}
                            <div>
                                <h3 className='my-[10px] font-medium text-[16px]'>Product Image</h3>
                                <div className="flex items-center justify-center w-full">
                                    <label for="dropzone-file" className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />

                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                                <h3 className='my-[10px] font-medium text-[16px]'>Back Image</h3>
                                <div className="flex items-center justify-center w-full">
                                    <label for="dropzone-file" className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />

                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                                <h3 className='my-[10px] font-medium text-[16px]'>Gallery Image</h3>
                                <div className="flex items-center justify-center w-full">
                                    <label for="dropzone-file" className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />

                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            {/* first colum end */}

                            {/* second colum start */}
                            <div className='grid grid-cols-2 gap-[20px] mt-[20px]'>
                                {/* first text */}
                                <div>
                                    <h3>Prodct Name</h3>
                                    <input type='text' className='p-[8px] text-[16px] text-gray-500 border border-gray-300 rounded-[8px] w-full font-medium font-serif' placeholder='Prodct Name' />

                                    <h3 className='mt-[10px] font-medium font-serif'>Select Sub Category</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]' placeholder='Select Sub Category'>
                                        <option>select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Select Meterial</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]'>
                                        <option>Select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Select Prodcut Type</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]'>
                                        <option>Select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Is Top Rated</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]'>
                                        <option>Select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Actual Price</h3>
                                    <input type='text' className='p-[8px] text-[16px] text-gray-500 border border-gray-300 rounded-[8px] w-full font-medium font-serif' placeholder='Actual Price' />

                                    <h3 className='mt-[10px] font-medium font-serif'>Total In Stocks</h3>
                                    <input type='text' className='p-[8px] text-[16px] text-gray-500 border border-gray-300 rounded-[8px] w-full font-medium font-serif' placeholder='Total In Stocks' />


                                </div>
                                {/* first text end */}

                                {/* second text */}
                                <div>
                                    <h3>Select Sub Category</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]' placeholder='Select Sub Category'>
                                        <option>select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Select Meterial</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]'>
                                        <option>Select</option>
                                        <option>product</option>
                                    </select>
                                    
                                    <h3 className='mt-[10px] font-medium font-serif'>Select Meterial</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]'>
                                        <option>Select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Select Prodcut Type</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]'>
                                        <option>Select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Is Top Rated</h3>
                                    <select className='w-full border border-gray-300 rounded-[8px] borde text-[16px]  text-gray-500 font-medium font-serif p-[10px]'>
                                        <option>Select</option>
                                        <option>product</option>
                                    </select>

                                    <h3 className='mt-[10px] font-medium font-serif'>Actual Price</h3>
                                    <input type='text' className='p-[8px] text-[16px] text-gray-500 border border-gray-300 rounded-[8px] w-full font-medium font-serif' placeholder='Actual Price' />

                                    <h3 className='mt-[10px] font-medium font-serif'>Total In Stocks</h3>
                                    <input type='text' className='p-[8px] text-[16px] text-gray-500 border border-gray-300 rounded-[8px] w-full font-medium font-serif' placeholder='Total In Stocks' />

                                </div>
                                {/* second text end */}

                            </div>
                            {/* second column end */}

                        </div>
                        <button className='my-[30px_10px] cursor-pointer border border-white hover:bg-black hover:border hover:border-red-500 duration-300 p-[10px_16px] bg-green-500 text-white font-medium font-serif text-[16px] rounded-[8px]'>Create Product</button>
                    </form>
                </div>

            </div>
        </div>  );
}
