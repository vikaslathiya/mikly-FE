import React from "react";
import { useRoutes } from "react-router-dom";
import AuthContainer from "../Containers/AuthContainer";
import LayoutContainer from "../Containers/LayoutContainer";
import HomePage from "../Views/Hompage";
import LoginPage from "../Views/Login";

const Routings = [
  {
    path: "/login",
    element: <AuthContainer />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/homepage",
    element: <LayoutContainer />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <h1>Not Found</h1>
      </>
    ),
  },
];

function Routes() {
  let element = useRoutes(Routings);

  return element;
}

export default Routes;
