  import React from 'react'
  import { Navbar } from '../components/Navbar'
  import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

  export const Layout = () => {
    return (
      <>
      <Navbar />
      <div className='flex mt-14'>
      <Sidebar />
      <Outlet/>
      </div>
      </>
    )
  }
