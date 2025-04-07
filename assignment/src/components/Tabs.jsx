import React from 'react'
import { NavLink } from 'react-router-dom'

export const Tabs = ({ tabs = [] }) => {
    return (
        <ul className="flex justify-between h-fit flex-wrap w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b-1 border-gray-900">
            <div className='flex justify-start'>
                {tabs?.map((tab, ind) => {
                    return (
                        <li className="me-2 block p-5 border-r-1 border-gray-900" key={ind}>
                            <NavLink
                                to={tab.to}
                                className={({ isActive }) =>
                                    `font-bold mb-5 text-gray-700 hover:text-gray-100 cursor-pointer ${isActive ? 'text-white' : ''
                                    }`
                                }
                            >
                                {tab.name}
                            </NavLink>
                            {/* <a href="#" className={`inline-block px-4 py-3 text-white bg-blue-600 rounded-lg ${ind === 0 ? 'active' : ''}`} aria-current="page">{tab.name}</a> */}
                        </li>
                    )
                })}
            </div>
            <li className="me-2 p-5 pl-[37.5px] pr-[37.5px] border-l-1 border-gray-900">
                <a href="#" className="font-bold mb-5 text-gray-700 hover:text-gray-100 cursor-pointer">More</a>
            </li>
        </ul>

    )
}
