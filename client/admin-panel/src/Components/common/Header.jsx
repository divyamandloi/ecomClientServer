import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { MdDashboard } from "react-icons/md";
//import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboardCustomize } from 'react-icons/md';
//import { FaDiceTwo } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
export default function Header() {
    let [profile,setProfile] =useState(false)
  return (
    <header className='sticky top-0 bg-white border-b-1  border-gray-300 mx-[20px]'>
      <nav className='p-[20px] flex items-center justify-between'>
        <div>
            <h1 className=' text-[35px] font-serif flex gap-[5px] items-center'><MdDashboardCustomize className='text-green-400'/>Admin Dashboard</h1>
        </div>
        <div onMouseEnter={()=>setProfile(true)} onMouseLeave={()=>setProfile(false)}>
          <figure className='relative group w-12 h-12 cursor-pointer rounded-full'>
          <img className='w-12 h-12 rounded-full object-cover' src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='profile image'/>
          </figure>
          
           {/* <RiAdminFill className='text-[30px] text-indigo-400 hover:text-blue-500 duration-300  cursor-pointer'/> */}
           <div className={`fixed right-[2%] duration-500 ${profile?'right-[4%]':'left-[-1000px]'}  z-[99999] w-[200px] p-[20px] bg-white border border-gray-300 rounded-[5px]`}>
             <Link to='/admin-profile'><h3 className='border-b-1 border-gray-200 pb-[10px] hover:text-blue-400 cursor-pointer'>Profile</h3></Link>
             
             <Link to='/company-profile'><h3 className='mt-[10px] border-b-1 border-gray-200 pb-[10px] hover:text-blue-400 cursor-pointer '>Company Profile</h3></Link>
             
            <Link to='/'><h3 className='mt-[10px] hover:text-blue-400 cursor-pointer'>Logout</h3></Link> 
           </div>
        </div>
      </nav>
    </header>
  );
}

