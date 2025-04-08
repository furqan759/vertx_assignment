import React from 'react'
import { Outlet } from 'react-router-dom';
import { Page } from '../page-layout';

export const Dashboard = () => {
  return (
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

  )
}
