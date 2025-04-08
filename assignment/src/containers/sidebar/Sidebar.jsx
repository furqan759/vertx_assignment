import React from 'react'
import { User } from '../../assets/img'
import { PlusSolid } from '../../assets/icons'
import { NavLink } from 'react-router-dom'
import { sideBarRoutes } from '../../data/general'

export const Sidebar = () => {
    return (
        <div className='md:h-screen md:w-60 hidden w-full md:flex'>
            <div className='md:flex md:flex-col hidden justify-between h-[calc(100vh-54px)] w-17 border-r-1 border-gray-900'>
                <div className='relative border-b-1 border-gray-900'>
                    <img className='rounded-[50%] w-10 mx-auto mt-3 mb-3' src={User} alt="user-image" />
                    <div className='size-[9px] absolute rounded-[50%] top-[42px] right-[8px] bg-green-800'></div>
                </div>
                <div className='relative border-t-1 border-gray-900'>
                    <img className='rounded-[50%] w-5 mx-auto mt-3 mb-3' src={PlusSolid} alt="user-image" />
                </div>
            </div>
            <div className='h-screen w-full border-r-1 border-gray-900 border-opacity-50'>
                <div className='mt-5 ml-8 mr-15'>
                    <ul>
                    {sideBarRoutes?.map((route, index) => (
                            <li className='mb-5' key={index}>
                                <NavLink
                                    to={route.to}
                                    className={({ isActive }) =>
                                        `font-bold mb-5 text-gray-700 hover:text-gray-100 cursor-pointer ${
                                          isActive ? 'text-white' : ''
                                        }`
                                      }
                                >
                                    {route.title}
                                </NavLink>

                            </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
