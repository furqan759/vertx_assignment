import React from 'react'
import { Button } from './Button'
import { Joomla } from '../assets/icons'

export const Navbar = () => {
  return (
    <>
      <div className='bg-black z-50 fixed flex top-0 w-full h-14 text-white border-gray-900 border-b-1'>
        <div className='flex-col h-full w-60 items-center'>
          <div className='flex h-full w-60 items-center border-gray-900 border-r-1'>
            <img className='w-12 pl-2 pr-2' src={Joomla} />
            <p className='w-40 text-[18px] font-[700] text-center px-[12px]'>Vertxlabs, Inc</p>
          </div>
        </div>
        <div className='flex w-full items-center'>
          <p className='pl-5'>Analytics</p>
          <div className='flex w-full justify-end h-full'>
            <Button title="Activity" className="cursor-pointer border-gray-900 border-l-1 px-[32px]" />
            <Button title="Log out" className="cursor-pointer border-gray-900 border-l-1 px-[32px]" />
          </div>
        </div>
      </div>
    </>
  )
}
