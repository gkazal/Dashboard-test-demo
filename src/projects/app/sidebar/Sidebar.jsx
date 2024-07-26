import { useState } from "react";
import menu from "../../../assets/images/Menu.svg";
import { menuArr } from "../../lib/Icons";
import SidebarItem from "./SidebarItem";
import SidebarSubMenu from "./SidebarSubMenu";
// import DashboardCenter from "../Dashboard/DashboardCenter";
import "./Sidebar.css";

const SubMenuHover = ({ item }) => {
  return (
    <ul className=" dropdown-content menu bg-[silver] ml-3 rounded-lg z-[1] w-[230px]">
      {item.subMenu.map((subItem) => (
        <li key={subItem.id}>
          <div key={subItem.id} className="flex">
            <img className="w-[20px] h-[20px]" src={subItem.iconL} alt="icon" />
            <a className="font-medium text-[16px] ">{subItem.title} sub</a>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [menuItem, setMenuItem] = useState({});
  const [menuId, setMenuId] = useState({});

  const handleClick = (item) => {
    setMenuId(item.id);
    setMenuItem(item);
    console.log(item);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-[70px] bg-[#e5e7eb]">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          <div className="flex justify-center p-2 ml-[12px] mt-4">
            <div className="burger cursor-pointer">
              <img src={menu} alt="" />
            </div>
          </div>
        </button>

        <ul className="space-y-4 mt-4 ml-[12px] dropdown dropdown-hover dropdown-right">
          {menuArr.map((item) => (
            <li key={item.id} className="main-menu border">
              {/* main menu */}
              <SidebarItem
                item={item}
                onClick={() => handleClick(item)}
                active={menuId === item.id}
              />

              {item.id === menuId ? <SubMenuHover item={item} /> : null}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`overflow-hidden ${
          open
            ? "w-full max-w-[231px] duration-300 bg-white border-r-2 "
            : "max-w-[0]  duration-300"
        }`}
      >
        {/* Sidebar sub menu */}

        {menuArr
          .filter((el) => el.id === menuId)
          ?.map((item) => (
            <SidebarSubMenu key={item.id} item={item} />
          ))}
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
