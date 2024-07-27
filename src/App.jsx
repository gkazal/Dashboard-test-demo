import Sidebar from "./projects/app/sidebar/Sidebar";
import DashboardCenter from "./projects/app/Dashboard/DashboardCenter";
import Navbar from "./projects/app/Dashboard/Navbar";
import Dashboard from "./projects/app/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="ml-[70px] position: fixed w-[calc(100%_-_71px)]">
        <div className="">
          <Navbar />
        </div>
      </div>
      <Sidebar>
        <div className="w-full h-screen flex items-center justify-center bg-[#f3f4f6] ">
          {/* <DashboardCenter /> */}
          <Outlet></Outlet>
        </div>
      </Sidebar>

      {/* <Dashboard/> */}
    </>
  );
}

export default App;
