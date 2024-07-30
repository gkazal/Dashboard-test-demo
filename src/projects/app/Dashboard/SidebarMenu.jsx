/* eslint-disable react/prop-types */
import { useState } from "react";
import menu from "../../../assets/images/Menu.svg";
import { menuArr } from "../sidebar/menuArr";

const MainMenu = ({ item, onClick }) => {
  return (
    <button
      type="button"
      className=" w-full"
      onClick={onClick}
      onMouseEnter={onClick}
    >
      <div className="flex flex-col items-center sitebarIconHover ">
        <div className="size-[30px]  mb-2 dropdown ">
          <img className="w-full" src={item.iconLine} alt="icon" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="">{item.miniTitle}</span>
      </div>
    </button>
  );
};

const SubMenu = ({ item }) => {
  return (
    <ul className="submenu-container dropdown-content menu bg-[#FFFFFF] ml-3 rounded-lg z-[1] w-[230px]">
      {item.subMenu.map((subItem) => (
        <li key={subItem.id}>
          <div key={subItem.id} className="flex hover:bg-[#fbf0fb]   ">
            <img className="w-[20px] h-[20px]" src={subItem.iconL} alt="icon" />
            <a className="font-medium text-[16px] ">{subItem.title}</a>
          </div>
        </li>
      ))}
    </ul>
  );
};


const SidebarMenu = ({setShowNav, showNav}) => {
  const [menuItem, setMenuItem] = useState({});


  const handleClick = (item) => {
    setMenuItem(item);
    console.log(item);
  };

  return (
    <div className="w-[71px] bg-[#e5e7eb]  pt-4">
      <div className="flex justify-center p-2">
        <div className="burger cursor-pointer">
          <img
            src={menu}
            alt=""
            onClick={() => setShowNav(!showNav)}
          />
        </div>
      </div>

      <ul className="space-y-3 mt-4 ml-3 dropdown dropdown-hover dropdown-right">
        {menuArr.map((item) => (
          <li key={item.id} className="main-menu border">
            {/* main menu */}
            <MainMenu item={item} onClick={() => handleClick(item)} />

            {/* sub menu */}
            {/* jodi user a click kori taile item.id holo finance or user.. 
            taile setar sate menuItem.id holo finance a click korle finance hobe or user a click korle user hobe
            jodi era mil khai taile amar submenu open hobe naile na..
            */}
            {item.id === menuItem.id ? <SubMenu item={item} /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
