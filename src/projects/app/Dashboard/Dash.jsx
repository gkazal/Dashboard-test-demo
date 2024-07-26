import Navbar from "./Navbar";

import dashboard from "../../../assets/images/nav/dashboard.svg";
import campaign from "../../../assets/images/nav/campaign.svg";
import people from "../../../assets/images/nav/people.svg";
import library from "../../../assets/images/nav/library.svg";
import report from "../../../assets/images/nav/report.svg";
import api from "../../../assets/images/nav/api.svg";
import billing from "../../../assets/images/nav/billing.svg";

import DashboardCenter from "./DashboardCenter";
import "./sitebarStyle.css";
import { useState } from "react";

import SidebarMenu from "./SidebarMenu";

const sitebarHoverArr = [
  { id: 1, title: "Dash", iconD: dashboard, iconA: dashboard },
  { id: 2, title: "Campaign", iconD: campaign, iconA: campaign },
  { id: 3, title: "People", iconD: people, iconA: people },
  { id: 4, title: "Library", iconD: library, iconA: library },
  { id: 5, title: "Report", iconD: report, iconA: report },
  { id: 6, title: "API", iconD: api, iconA: api },
  { id: 7, title: "Billings", iconD: billing, iconA: billing },
];

const Dash = () => {
  const [showNav, setShowNav] = useState(false);

  // const [state, setState] = useState();

  // const handleClick = (e) => {
  //   console.log(e);
  //   setState(e);
  //   console.log(state);
  // };

  return (
    <div className="text-black">
      <div className="ml-[71px] position: fixed w-[calc(100%_-_71px)]">
        <div className="">
          <Navbar />
        </div>
      </div>

      <div className="flex">
        {/* <div className="w-[71px]">
          <div className="bg-[#e5e7eb] h-full pt-4">
            <div className="">
              
              <div className="flex justify-center p-2">
                <div className="burger cursor-pointer">
                  <img src={menu} alt="" onClick={() => setShowNav(!showNav)} />
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
                          <img
                            className="w-full"
                            src={item.iconLine}
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="">{item.miniTitle}</span>
                      </div>
                    </button>

                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-[#FFFFFF] rounded-box z-[1] w-[231px] mt-2 "
                    >
                      <li className="ml-1 p-1 mt-1 ">
                        {item?.id === state
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}


        <SidebarMenu setShowNav={setShowNav} showNav={showNav} />

        <div
          className={`${
            showNav
              ? "w-[231px] h-full duration-300 bg-[#f3f4f6] mt-[64px] border-r-2 min-h-screen"
              : "w-[0] duration-300 bg-[#f3f4f6] mt-[64px] border-r-0"
          }`}
        >
          <div className=" ">
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#FFFFFF] w-[229px] mt-2"
            >
              <div className="ml-4 p-2 mt-2 ">
                {sitebarHoverArr.map((item) => (
                  <div
                    key={item.id}
                    className="flex hover:bg-[#fbf0fb] w-[200px] h-[38px] mt-1"
                  >
                    <img
                      className="w-[20px] h-[20px] mr-2"
                      src={item.iconD}
                      alt="icon"
                    />
                    <a className="font-medium text-[16px] ">{item.title}</a>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-[#f3f4f6] mt-[64px] ">
            <div className="min-h-screen">
              <DashboardCenter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
