import React from 'react'
import { Outlet } from 'react-router-dom';
import { Page } from '../page-layout';

export const Profile = () => {
  return (
    <Page pageTitle={'Dashboard'} showMoreBtn={false} tabConfig={[
      {
                  name: "Overview",
                  to: "/profile/overview",
                },
                {
                  name: "Portfolio",
                  to: "/profile/portfolio",
                },
                {
                  name: "Experience",
                  to: "/profile/experience",
                },
                {
                  name: "Media",
                  to: "/profile/media",
                }
    ]} Outlet={<Outlet />} />

  )
}
