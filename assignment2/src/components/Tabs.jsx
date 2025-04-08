import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Tabs = ({ tabs = [], showMoreBtn }) => {
    const [tabsArray, setTabsArray] = useState(showMoreBtn ? [...tabs, { name: "More", to: "/more" }] : tabs)
    return (
        <>
            <ul className="justify-between h-fit hidden md:flex flex-wrap w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b-1 border-gray-900">
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
                            </li>
                        )
                    })}
                </div>
                <li className="me-2 p-5 pl-[37.5px] pr-[37.5px] border-l-1 border-gray-900">
                    <a href="#" className="font-bold mb-5 text-gray-700 hover:text-gray-100 cursor-pointer">More</a>
                </li>
            </ul>
            {/* mobile view */}
            <ul className="justify-evenly h-fit flex md:hidden flex-nowrap w-full mb-6 md:mb-0 text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b-1 border-gray-900">
                {tabsArray?.map((tab, ind) => {
                    return (
                        <li className="me-2 block p-4 border-none" key={ind}>
                            <NavLink
                                to={tab.to}
                                className={({ isActive }) =>
                                    `font-bold mb-5 text-gray-700 hover:text-gray-100 cursor-pointer ${isActive ? 'text-white border-b-1 border-white:100' : ''
                                    }`
                                }
                            >
                                {tab.name}
                            </NavLink>
                        </li>
                    )
                })}
                {/* <li className="me-2 p-5 pl-[37.5px] pr-[37.5px] border-l-1 border-gray-900">
            <a href="#" className="font-bold mb-5 text-gray-700 hover:text-gray-100 cursor-pointer">More</a>
        </li> */}
            </ul>
        </>

    )
}
