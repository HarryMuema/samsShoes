import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import {
  CompareScreen,
  ContactsPage,
  ErrorPage,
  LandingPage,
  LoginPage,
  MyCartPage,
  RegistrationPage,
  Root,
  SmallScrNavbar,
} from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/navbar",
        element: <SmallScrNavbar />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/compare",
        element: <CompareScreen />,
      },
      {
        path: "/cart",
        element: <MyCartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
