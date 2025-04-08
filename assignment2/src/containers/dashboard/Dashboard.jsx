import React from 'react'
import { Outlet } from 'react-router-dom';
import { Page } from '../page-layout';

export const Dashboard = () => {
  return (
    <Page pageTitle={'Dashboard'} showMoreBtn={false} tabConfig={[
      {
                  name: "Overview",
                  to: "/dashboard/overview",
                },
                {
                  name: "Portfolio",
                  to: "/dashboard/portfolio",
                },
                {
                  name: "Experience",
                  to: "/dashboard/experience",
                },
                {
                  name: "Media",
                  to: "/dashboard/media",
                }
    ]} Outlet={<Outlet />} />

  )
}
