import React from 'react'

export const Tabs = ({tabs = []}) => {
    return (
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {tabs?.map((tab, ind) => {
                return (
            <li class="me-2">
                <a href="#" className={`inline-block px-4 py-3 text-white bg-blue-600 rounded-lg ${ind === 0 ? 'active' : ''}`} aria-current="page">{tab.name}</a>
            </li>

                )
            })}
            {/* <li class="me-2">
                <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 2</a>
            </li>
            <li class="me-2">
                <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 3</a>
            </li>
            <li class="me-2">
                <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 4</a>
            </li>
            <li>
                <a class="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Tab 5</a>
            </li> */}
        </ul>

    )
}
