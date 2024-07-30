/* eslint-disable react/prop-types */
import { useState } from "react";
import menu from "../../../assets/images/Menu.svg";
import { menuArr } from "../sidebar/menuArr";

const SidebarMenu = ({ setShowNav }) => {
  const [menuItem, setMenuItem] = useState("");

  const handleClick = (e) => {
    // console.log(e);
    setMenuItem(e);
    console.log(menuItem);
  };

  return (
    <div className="w-[71px]">
      <div className="bg-[#e5e7eb] h-full pt-4">
        <div className="">
          <div className="flex justify-center p-2">
            <div className="burger cursor-pointer">
              <img
                src={menu}
                alt=""
                onClick={() => setShowNav((prevSt) => !prevSt)}
              />
            </div>
          </div>

          <div className="dropdown dropdown-hover dropdown-right">
            {menuArr.map((item) => (
              <div
                key={item.id}
                className="p-2 px-[13px] pt-4 cursor-pointer flex justify-center"
              >
                <button onClick={() => handleClick(item.id)} type="button">
                  <div className="flex flex-col items-center sitebarIconHover ">
                    <div className="size-[30px]  mb-2 dropdown ">
                      <img className="w-full" src={item.iconLine} alt="icon" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="">{item.miniTitle}</span>
                  </div>
                </button>

                {menuItem?.length > 0 && (
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-[#FFFFFF] rounded-box z-[1] w-[231px] mt-2 "
                  >
                    <li className="ml-1 p-1 mt-1 bg-red-700">
                      {item?.id === menuItem
                        ? item?.subMenu?.map((el) => (
                            <div
                              key={el.id}
                              className="flex hover:bg-[#fbf0fb] w-[200px] h-[38px] mt-1 "
                            >
                              <div className="absolute -left-3 top-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
                              <img
                                className="w-[20px] h-[20px]"
                                src={el.iconL}
                                alt="icon"
                              />
                              <a className="font-medium text-[16px] ">
                                {el.title}
                              </a>
                            </div>
                          ))
                        : null}
                    </li>
                  </ul>
                )}
              </div>
            ))}

            {/* <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-[#FFFFFF] rounded-box z-[1] w-[231px] mt-2 "
                >
                  
                  <li className="ml-1 p-1 mt-1 ">
                    {sitebarHoverArr.map((item) => (
                      <div
                        key={item.id}
                        className="flex hover:bg-[#fbf0fb] w-[200px] h-[38px] mt-1 "
                      >
                        <div className="absolute -left-3 top-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
                        <img
                          className="w-[20px] h-[20px]"
                          src={item.iconD}
                          alt="icon"
                        />
                        <a className="font-medium text-[16px] ">{item.title}</a>
                      </div>
                    ))}
                  </li>
                </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
