  import React from 'react'
  import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar/Sidebar';
import { BottomNav } from './bottomNav';
import { Navbar } from './navbar';

  export const Layout = () => {
    return (
      <>
      <Navbar />
      <div className='flex mt-4 md:mt-14'>
      <Sidebar />
      <div className='flex-1 pb-20'>
      <Outlet/>
      </div>
      </div>
      <BottomNav />
      </>
    )
  }
