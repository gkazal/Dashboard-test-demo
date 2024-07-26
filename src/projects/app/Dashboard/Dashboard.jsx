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
  { id: 1, title: "Dashboard", iconD: dashboard, iconA: dashboard },
  { id: 2, title: "Campaign", iconD: campaign, iconA: campaign },
  { id: 3, title: "People", iconD: people, iconA: people },
  { id: 4, title: "Library", iconD: library, iconA: library },
  { id: 5, title: "Report", iconD: report, iconA: report },
  { id: 6, title: "API", iconD: api, iconA: api },
  { id: 7, title: "Billings", iconD: billing, iconA: billing },
];

const Dashboard = () => {
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

export default Dashboard;
