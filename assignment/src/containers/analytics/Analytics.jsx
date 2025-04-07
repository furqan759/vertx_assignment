import React from 'react'
import { Page } from '../page-layout'
import { Outlet } from 'react-router-dom'

export const Analytics = () => {
  return (
    <>
    <Page pageTitle={'Dashboard'} tabConfig={[
      {
        name: "Overview",
        to: "/dashboard/overview",
      },
      {
        name: "Demographics",
        to: "/dashboard/demographics"
      },
    ]} Outlet={<Outlet />} />
  </>
  )
}
