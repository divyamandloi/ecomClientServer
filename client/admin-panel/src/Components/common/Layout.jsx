import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className='grid grid-cols-[20%_auto]  gap-[20px] '>
        <div className=' bg-white h-[100vh]   overflow-y-scroll sticky top-0'>

          <Sidebar/>

        </div>
        <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>  );
}
