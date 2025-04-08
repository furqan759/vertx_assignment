import React from 'react'
import { Outlet } from 'react-router-dom';
import { Page } from '../page-layout';

export const Dashboard = () => {
  return (
    <Page pageTitle={'Dashboard'} showMoreBtn={false} tabConfig={[
      {
                  name: "Overview",
                  to: "overview",
                },
                {
                  name: "Portfolio",
                  to: "portfolio",
                },
                {
                  name: "Experience",
                  to: "experience",
                },
                {
                  name: "Media",
                  to: "media",
                }
    ]} Outlet={<Outlet />} />

  )
}
