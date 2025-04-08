import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";
import { Analytics, Dashboard, Overview, Profile, ProfileOverview } from './containers/index.js';
import { Layout } from './containers/Layout.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This is the layout wrapper
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element:  <Navigate to="overview" replace />,
          },
          {
            path: "overview",
            element: <Overview/>,
          },
          {
            path: "demographics",
            element: <div>demographics Content</div>,
          }
        ]
      },
      {
        path: "analytics",
        element: <Analytics />,
        children: [
          {
            index: true,
            element:  <Navigate to="overview" replace />,
          },
          {
            path: "overview",
            element: <Overview/>,
          },
          {
            path: "demographics",
            element: <div>demographics Content</div>,
          }
        ]
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element:  <Navigate to="overview" replace />,
          },
          {
            path: "overview",
            element: <ProfileOverview/>,
          },
          {
            path: "demographics",
            element: <div>demographics Content</div>,
          }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
