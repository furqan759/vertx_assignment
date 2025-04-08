import React from 'react'
import { NavLink } from 'react-router-dom'

export const BottomNav = () => {

    const sideBarRoutes = [
        {
            title: "Dashboard",
            to: '/dashboard',
            logo: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
          </svg>
          ,
        },
        {
            title: "Analytics",
            to: '/analytics',
            logo: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"/>
          </svg>          
,
        },
        {
            title: "Connect",
            to: '/connect',
            logo: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" clip-rule="evenodd"/>
          </svg>          
,
        },
        {
            title: "Activity",
            to: '/activity',
            logo: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
          </svg>
          
,
        },
        {
            title: "Dealroom",
            to: '/dealroom',
            logo: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z"/>
            <path d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z"/>
            <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.733 3.733 0 0 1 1.238-1.34 3.915 3.915 0 0 1 3.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 0 0-2.5 3.496 9.895 9.895 0 0 0 .283 8.368 9.973 9.973 0 0 0 2.73 3.322 17.161 17.161 0 0 1-.424-2.729Z"/>
            <path d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 0 1-2 .53 3.946 3.946 0 0 1-1.983-.535 3.788 3.788 0 0 1-1.36-1.361 3.752 3.752 0 0 1-.51-1.85 1.812 1.812 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 0 0-.787 1.516v6.377a10.67 10.67 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10.022 10.022 0 0 0 3.282-2.858 9.936 9.936 0 0 0 1.75-3.97 19.615 19.615 0 0 1-2.845 2.216Z"/>
          </svg>          
,
        }
        
    ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-900 shadow md:hidden">
      <ul className='flex flex-row justify-around items-baseline h-16 pt-3'>
                    {sideBarRoutes?.map((route, index) => (
                            <li className='mb-5 flex flex-col justify-center items-center' key={index}>
                                {/* <img src={route.logo} alt="" /> */}
                                {route.logo}
                                <NavLink
                                    to={route.to}
                                    className={({ isActive }) =>
                                        `font-bold text-[12px] mb-5 text-gray-700 hover:text-gray-100 cursor-pointer ${
                                          isActive ? 'text-white' : ''
                                        }`
                                      }
                                >
                                    {route.title}
                                </NavLink>

                            </li>
                    ))}
                    </ul>
        {/* <button className="flex flex-col items-center text-sm text-gray-600 hover:text-black"> */}
          {/* <Home className="w-5 h-5" /> */}
          {/* Home
        </button> */}
        {/* <button className="flex flex-col items-center text-sm text-gray-600 hover:text-black"> */}
          {/* <Search className="w-5 h-5" /> */}
          {/* Search
        </button> */}
      
    </nav>
  )
}
