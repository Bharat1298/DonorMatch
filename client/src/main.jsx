import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Charity from "./components/Charity";
import CharityList from "./components/CharityList";
<<<<<<< HEAD
import Users from "./components/Users";
=======
import UserPage from "./components/User";
>>>>>>> 2bac3be (Started working on User Page)
import "./index.css";
import Index from "./components/Index";
import Organizations from "./components/Organizations";
import Signup from "./components/Signup";
import Account from "./components/account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
<<<<<<< HEAD
        element: <Index />,
      },
    ],
  },
  {
    path: "/Index",
    element: <App />,
    children: [
      {
        path: "/Index",
        element: <Index />,
      },
    ],
  },
  {
    path: "/Organizations",
    element: <App />,
    children: [
      {
        path: "/Organizations",
        element: <Organizations />,
      },
    ],
  },
  {
    path: "/Account",
    element: <App />,
    children: [
      {
        path: "/Account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/Signup",
    element: <App />,
    children: [
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/User",
    element: <App />,
    children: [
      {
        path: "/User",
        element: <Users />,
=======
        element: <UserPage />,
>>>>>>> 2bac3be (Started working on User Page)
      },
    ],
  },
  {
    path: "/list",
    element: <App />,
    children: [
      {
<<<<<<< HEAD
        path: "/list",
=======
        path: "/",
>>>>>>> 2bac3be (Started working on User Page)
        element: <CharityList />,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Charity />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Charity />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);