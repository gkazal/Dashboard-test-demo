import Navbar from '../Dashboard/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function MenuHandler() {
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

export default MenuHandler;