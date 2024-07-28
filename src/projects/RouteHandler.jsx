import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardCenter from "./app/Dashboard/DashboardCenter.jsx";
import DashboardUser from "./app/Dashboard/DashboardUser.jsx";
import DashboardContacts from "./app/Dashboard/DashboardContacts.jsx";
import MenuHandler from "./app/menu/MenuHandler.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuHandler />,
      children:[
        {
          path:"/finance/dashboard",
          element: <DashboardCenter/>
        },
        {
          path:"/finance/accounts",
          element: <DashboardCenter/>
        },
      
        {
          path:"/users/dashboard",
          element: <DashboardUser/>
        },
        
        {
          path:"/contact/dashboard",
          element: <DashboardContacts/>
        },
       
      ]
    },
  
  ]);

  function RouteHandler() {
    return <RouterProvider router={router} />
  }

  export default RouteHandler