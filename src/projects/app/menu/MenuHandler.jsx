import Navbar from "../Dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import "./Sidebar.css";
// import "./projects/app/sidebar/Sidebar.css"

function MenuHandler() {
  return (
    <>
      <div className="ml-[70px] position: fixed w-[calc(100%_-_71px)]">
        <div className="">
          <Navbar />
        </div>
      </div>
      <Sidebar>
        {/* <DashboardCenter /> */}
        <div className="dash dashboard-center">
          <Outlet></Outlet>
        </div>
      </Sidebar>

      {/* <Dashboard/> */}
    </>
  );
}

export default MenuHandler;
