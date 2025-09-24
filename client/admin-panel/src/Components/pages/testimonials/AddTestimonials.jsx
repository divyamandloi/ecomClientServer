import React from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5'
import BreadCrum from '../../common/BreadCrum';


export default function AddTestimonials() {
  let funObj = "Add Testimonials"
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
                        <div className='grid grid-cols-[30%_auto] gap-4'>
                            <div>
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
                            <div className='w-full'>
                                <h3 className='my-[10px] font-medium text-[14px]'>Name</h3>
                                <input type='text' placeholder='Name' className=' w-full p-[8px] rounded-[8px] border border-gray-400 text-[14px] text-gray-400' />
                                <h3 className='my-[10px] font-medium text-[14px]'>Designation</h3>
                                <input type='text' placeholder='Category Name' className=' w-full p-[8px] rounded-[8px] border border-gray-400 text-[14px] text-gray-400' />
                                <h3 className='my-[10px] font-medium text-[14px]'>Designation</h3>
                                <input type='text' placeholder='Category Name' className=' w-full p-[8px] rounded-[8px] border border-gray-400 text-[14px] text-gray-400' />
                                <h3 className='my-[10px] font-medium text-[14px]'>Rating</h3>
                                <input type='number' placeholder='Rating' className=' w-full p-[8px] rounded-[8px] border border-gray-400 text-[14px] text-gray-400' />
                                <h3 className='my-[10px] font-medium text-[14px]'>Message</h3>
                                <textarea  placeholder='Message' className=' w-full p-[20px] rounded-[8px] border border-gray-400 text-[14px] text-gray-400'></textarea>
                            </div>
                        </div>
                        <button className='my-[20px] p-[10px_16px] rounded-[8px] text-white text-[16px] font-serif bg-sky-500 cursor-pointer duration-200 hover:bg-black hover:border hover:border-red-500'>Add Category</button>
                    </form>

                </div>

                {/* input box end */}
            </div>
        </div>
  );
}
