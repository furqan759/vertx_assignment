import React from 'react'
import { Button } from '../../components/Button'
import { Joomla } from '../../assets/icons'
import { User } from '../../assets/img'

export const Navbar = () => {
  return (
    <>
      <div className='bg-black hidden z-50 fixed md:flex top-0 w-full h-14 text-white border-gray-900 border-b-1'>
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

      <div className='flex mx-2 justify-between items-center md:hidden'>
          <div>
            <img className='rounded-[50%] w-10 mx-auto mt-3 mb-3' src={User} alt="user-image" />
          </div>
          <div>
            <img className='rounded-[50%] w-10 mx-auto mt-3 mb-3' src={Joomla} alt="user-image" />
          </div>
          <div>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 6h.01M12 12h.01M12 18h.01"/>
</svg>

          </div>
      </div>
      
    </>
  )
}
