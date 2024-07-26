import { useState } from "react";
import menu from "../../../assets/images/Menu.svg";
import { menuArr } from "../../lib/Icons";
import SidebarItem from "./SidebarItem";
import SidebarSubMenu from "./SidebarSubMenu";
// import DashboardCenter from "../Dashboard/DashboardCenter";

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [menuId, setMenuId] = useState({});

  const handleClick = (item) => {
    setMenuId(item.id);
    console.log(item.id);
    // console.log(menuId.id);
  };
  return (
    <div className="flex w-full h-full">
      <div className="w-[70px] bg-[#e5e7eb]">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          <div className="flex justify-center p-2">
            <div className="burger cursor-pointer">
              <img src={menu} alt="" />
            </div>
          </div>
        </button>

        <ul className="space-y-3 mt-4">
          {menuArr.map((item) => (
            <li key={item.id} className="main-menu border">
              {/* main menu */}
              <SidebarItem
                item={item}
                onClick={() => handleClick(item)}
                active={menuId === item.id}
              />
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`overflow-hidden ${
          open
            ? "w-[231px] duration-300 bg-[#f3f4f6] border-r-2 "
            : "w-[0]  duration-300"
        }`}
      >
        {/* Sidebar sub menu */}
        {/* <h2 className="mt-[80px]">sidebar sub menu</h2> */}

        {menuArr.filter((el=>el.id === menuId))?.map((item) => <SidebarSubMenu key={item.id} item={item} />)}

          
          

        {/* <ul
          tabIndex={0}
          className="dropdown-content menu bg-[#FFFFFF] w-[229px] mt-12"
        >
          <div className="ml-4 p-2 mt-12 ">
            {menuArr?.map((item) => (
              <div
                key={item.id}
                className="flex hover:bg-[#fbf0fb] w-[200px] h-[38px] mt-1"
              >
                <img
                  className="w-[20px] h-[20px] mr-2"
                  src={item.iconFill}
                  alt="icon"
                />
                <a className="font-medium text-[16px] ">{item.title}</a>
              </div>
            ))}
          </div>
        </ul> */}
      </div>
      <div
        className={`mt-[64px] ${
          open ? "w-[calc(100%_-_272px)]" : "w-[calc(100%_-_71px)]"
        }`}
      >
        {/* Dashboard */}
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
