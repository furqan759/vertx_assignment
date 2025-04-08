import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Analytics, Dashboard, Overview } from './containers/index.js';
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
            element: <Overview/>,
          },
          {
            path: "overview",
            element: <Overview/>,
          },
          {
            path: "portfolio",
            element: <div>Portfolio Content</div>,
          },
          {
            path: "experience",
            element: <div>Experience Content</div>,
          },
          {
            path: "media",
            element: <div>Media Content</div>,
          },
        ]
      },
      {
        path: "analytics",
        element: <Analytics />,
        children: [
          {
            index: true,
            element: <Overview/>,
          },
          {
            path: "overview",
            element: <Overview/>,
          },
          {
            path: "portfolio",
            element: <div>Portfolio Content</div>,
          },
          {
            path: "experience",
            element: <div>Experience Content</div>,
          },
          {
            path: "media",
            element: <div>Media Content</div>,
          },
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
