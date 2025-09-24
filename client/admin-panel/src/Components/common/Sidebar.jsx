import React, { useState } from 'react';
import { FaRegDotCircle } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoMdText } from "react-icons/io";
import { RiDropFill } from "react-icons/ri";
import { TbArrowsCross } from "react-icons/tb";
import { IoReorderThree } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { LiaBorderStyleSolid } from "react-icons/lia";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { AiTwotoneDashboard } from "react-icons/ai";

import { Link } from 'react-router-dom';

export default function Sidebar() {
    let [viewData,setViewData] = useState(0)

  return (
    <div className='p-[20px_20px] '>
            <h1 className='text-[40px] font-bold font-serif uppercase text-center'><span className='text-blue-500'>Monsta</span></h1>
            <div className='hover:bg-gray-200 bg-gray-100  duration-300 p-[10px_20px] cursor-pointer mt-[20px]'>
                <Link to='/dashboard'><h2 className='font-medium flex gap-[5px] items-center' ><AiTwotoneDashboard/>Dashboard's</h2></Link>
            </div>
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(1)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><ImUsers/>Users</h3>
                </div>
                {
                    viewData == 1 &&
                    <div className='mt-[10px]  '>
                        <Link to='view-user'><h4 className='flex items-center gap-[5px] hover:text-blue-400 text-[14px] font-medium font-serif mt-[10px]font-light '><FaRegDotCircle/>View Users</h4></Link>
                    </div>

                }
            </div>

            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(2)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex gap-[5px] items-center'><IoMdText/>Enquirys</h3>
                </div>
                {
                    viewData == 2 &&
                    <div className='mt-[10px]'>
                        <Link to='/contact-enquiry'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Contact Enquirys</h4></Link>
                       <Link to='/newsletter'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>NewsLetters</h4></Link>
                    </div>
                }
            </div>

            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(3)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><RiDropFill/>Colors</h3>
                </div>
                {viewData == 3 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-Color'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Colors</h4></Link>
                        
                        <Link to='/view-Color'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Colors</h4></Link>
                    </div>
                }
            </div>
            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(4)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><TbArrowsCross/>Meterials</h3>
                </div>
                {viewData == 4 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-material'> <h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Meterials</h4></Link>
                        <Link to='/view-material'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Meterials</h4></Link>
                    </div>
                }
            </div>
            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(5)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><IoReorderThree/>Parent Categorys</h3>
                </div>
                {viewData == 5 &&
                    <div className='mt-[10px]'>
                        <Link to ='/add-category'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Categories</h4></Link>
                        <Link to='/view-category'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Categories</h4></Link>
                    </div>
                }
            </div>

            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(6)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><IoReorderThree/>Sub Categories</h3>
                </div>
                {viewData == 6 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-sub-category'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Sub Categories</h4></Link>
                        <Link to='/view-sub-category'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Sub Categories</h4></Link>
                    </div>
                }
            </div>

            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(7)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><IoReorderThree/>Sub Sub Categorys</h3>
                </div>
                {viewData == 7 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-sub-sub-categoryy'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Sub Sub Categories</h4></Link>
                        <Link to='/view-sub-sub-category'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Sub Sub Categories</h4></Link>
                    </div>
                }
            </div>

            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(8)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px] '><CiBag1/>Products</h3>
                </div>
                {viewData == 8 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-products'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Products</h4></Link>
                        <Link to='/view-products'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Products</h4></Link>
                    </div>
                }
            </div>

            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(9)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><CiStopwatch/>Why choose us</h3>
                </div>
                {viewData == 9 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-why-choose-us'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Why choose us</h4></Link>
                        <Link to='/view-why-choose-us'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]' ><FaRegDotCircle/>View Why choose us</h4></Link>
                    </div>
                }
            </div>

            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(11)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><LiaBorderStyleSolid/>Orders</h3>
                </div>
                {viewData ==11 &&
                    <div className='mt-[10px]'>
                        <Link to='/orders'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]' ><FaRegDotCircle/>Add Orders</h4></Link>
                    </div>
                }
            </div>

            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(12)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><PiSlidersHorizontalDuotone/>Sliders</h3>
                </div>
                {viewData == 12 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-slider'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Sliders</h4></Link>
                        <Link to='/view-slider'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Sliders</h4></Link>
                    </div>
                }
            </div>
            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(13)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><FaLocationArrow/>Country</h3>
                </div>
                {viewData == 13 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-country'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Country</h4></Link>
                        <Link to='/view-country'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Country</h4></Link>
                    </div>
                }
            </div>

            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(14)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><FaUserSlash/>Testimonials</h3>
                </div>
                {viewData == 14 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-testimonials'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Testimonials</h4></Link>
                        <Link to='/view-testimonials'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Testimonials</h4></Link>
                    </div>
                }
            </div>
            
            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(15)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><FaFileCircleQuestion/>Faq's</h3>
                </div>
                {viewData == 15 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-faqs'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>Add Faq's</h4></Link>
                        <Link to='/view-faqs'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-serif font-light text-[14px]'><FaRegDotCircle/>View Faq's </h4></Link>
                    </div>
                }
            </div>
            
            <div className='mt-[20px] hover:bg-gray-200 bg-gray-100 duration-300 p-[10px_20px] cursor-pointer ' onClick={() => setViewData(16)} onMouseLeave={()=>setViewData(0)}>
                <div >
                    <h3 className='font-medium flex items-center gap-[5px]'><LuMessageSquareText/>Terms & Conditions</h3>
                </div>
                {viewData == 16 &&
                    <div className='mt-[10px]'>
                        <Link to='/add-term-conditions'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px] font-light text-[14px] font-serif'><FaRegDotCircle/>Add Categories</h4></Link>
                        <Link to='/view-term-conditions'><h4 className='flex items-center gap-[5px] hover:text-blue-400 mt-[10px]  font-light text-[14px] font-serif'><FaRegDotCircle/>View Categories</h4></Link>
                    </div>
                }
            </div>

        </div>

  );
}
