import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardUser from "./projects/app/Dashboard/DashboardUser.jsx";
import DashboardCenter from "./projects/app/Dashboard/DashboardCenter.jsx";
import DashboardContacts from "./projects/app/Dashboard/DashboardContacts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/finance",
        element: <DashboardCenter/>
      },
      {
        path:"/finance/dashboard",
        element: <DashboardCenter/>
      },
      {
        path:"/users",
        element: <DashboardUser/>
      },
      {
        path:"/users/dashboard",
        element: <DashboardUser/>
      },
      {
        path:"/contacts",
        element: <DashboardContacts/>
      },
      {
        path:"/contacts/dashboard",
        element: <DashboardContacts/>
      },
     
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  
