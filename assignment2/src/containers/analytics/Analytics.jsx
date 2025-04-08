import React from 'react'
import { Page } from '../page-layout'
import { Outlet } from 'react-router-dom'

export const Analytics = () => {
  return (
    <>
    <Page pageTitle={'Dashboard'} tabConfig={[
      {
        name: "Overview",
        to: "/analytics/overview",
      },
      {
        name: "Demographics",
        to: "/analytics/demographics"
      },
    ]} Outlet={<Outlet />} />
  </>
  )
}
