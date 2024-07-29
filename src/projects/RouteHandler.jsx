import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuHandler from "./app/menu/MenuHandler.jsx";
import FinanceDashboard from "./app/pages/finance/FinanceDashboard.jsx";
import FinanceAccounts from "./app/pages/finance/FinanceAccounts.jsx";
import UserDashboard from "./app/pages/users/UserDashboard.jsx";
import { ContactDashboard } from "./app/pages/contacts/ContactDashboard.jsx";
import UserList from "./app/pages/users/UserList.jsx";
import { ContactDomain } from "./app/pages/contacts/ContactDomain.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuHandler />,
      children:[
        {
          path:"/finance/dashboard",
          element: <FinanceDashboard/>
        },
        {
          path:"/finance/accounts",
          element: <FinanceAccounts/>
        },
      
        {
          path:"/users/dashboard",
          element: <UserDashboard/>
        },
        {
          path:"/users/list",
          element: <UserList/>
        },
        
        {
          path:"/contacts/dashboard",
          element: <ContactDashboard/>
        },
        {
          path:"/contacts/domain",
          element: <ContactDomain/>
        },
       
      ]
    },
  
  ]);

  function RouteHandler() {
    return <RouterProvider router={router} />
  }

  export default RouteHandler