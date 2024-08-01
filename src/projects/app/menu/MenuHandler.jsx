import Navbar from "../Dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function MenuHandler() {
  return (
    <>
      <div className="ml-[70px] position: fixed w-[calc(100%_-_71px)]">
        <Navbar />
      </div>
      <Sidebar>
        <div className="dashboard-center">
          <Outlet></Outlet>
        </div>
      </Sidebar>
    </>
  );
}

export default MenuHandler;
