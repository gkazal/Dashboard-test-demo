import { useState } from "react";
import menu from "../../../assets/images/Menu.svg";
import { menuArr } from "../../lib/Icons";
import SidebarItem from "./SidebarItem";
import SidebarSubMenu from "./SidebarSubMenu";
import "./Sidebar.css";
import { useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];



  console.log(pathname)

  console.log(currentPath);
  // const [menuId, setMenuId] = useState("finance");
  const [menuItem, setMenuItem] = useState(menuArr[0]);
  console.log(menuItem);

  const handleClick = (item) => {
    setMenuItem(item);
    console.log(item);
  };

  return (
    <div
      className={`flex w-full h-screen  ${
        open ? "drawer-open" : "drawer-close"
      }`}
    >
      <div className="w-[70px] bg-[#e5e7eb]">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          <div className="flex justify-center p-2 ml-[12px] mt-4">
            <div className="burger cursor-pointer">
              <img src={menu} alt="" />
            </div>
          </div>
        </button>

        {/* main menu */}

        <ul className="space-y-4 mt-4 ml-[0px] ">
          {menuArr.map((item) => (
            <li key={item.id} className=" main-menu-item ">
              <SidebarItem
                item={item}
                onClick={() => handleClick(item)}
                // active={menuItem.id === item.id}
                active={item.id === currentPath}
              />

              {/* sidebar sub menu with hover */}

              <div className="layer-hover">
                <SidebarSubMenu item={item} onClick={handleClick} />
              </div>

              {/* {item.id === menuItem.id ? <SubMenuHover item={item} /> : null} */}
            </li>
          ))}
        </ul>
      </div>

      {/* sidebar sub menu */}

      <div className="layer-fixed">
        <SidebarSubMenu
          item={menuItem}
          onClick={() => handleClick(menuItem)}
          currentPath={pathname}
     
        />
      </div>

      {/* Dashboard */}

      <div className={`mt-[64px]  ${open ? "drawer-open" : "drawer-close"}`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
