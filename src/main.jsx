import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardUser from "./projects/app/Dashboard/DashboardUser.jsx";
import DashboardCenter from "./projects/app/Dashboard/DashboardCenter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/finance/dashboard",
        element: <DashboardCenter/>
      },
      {
        path:"/users/dashboard",
        element: <DashboardUser/>
      },
     
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  
