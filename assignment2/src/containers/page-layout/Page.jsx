import React from 'react'
import { Tabs } from '../../components/Tabs'

export const Page = ({tabConfig, showMoreBtn = true, Outlet}) => {
  return (
    <div className='flex flex-col w-full'>
    <Tabs tabs={tabConfig} showMoreBtn={showMoreBtn} />
    <div className='p-0 md:p-10 md:px-0 mx-2 md:mx-auto'>
    {Outlet}
    </div>
    </div>
  )
}
