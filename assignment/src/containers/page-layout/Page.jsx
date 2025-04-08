import React from 'react'
import { Tabs } from '../../components/Tabs'

export const Page = ({tabConfig, Outlet}) => {
  return (
    <div className='flex flex-col w-full'>
    <Tabs tabs={tabConfig} />
    <div className='p-0 md:p-10 md:px-0 mx-auto'>
    {Outlet}
    </div>
    </div>
  )
}
