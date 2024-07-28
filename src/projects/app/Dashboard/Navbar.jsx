import btnImage from "../../../assets/images/nav/Icon.svg";
import arrowImage from "../../../assets/images/nav/Down Arrow-fill.svg";
import bell from "../../../assets/images/nav/bell-fill v2.svg";
import allService from "../../../assets/images/nav/All Service.svg";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] border-b">
      <div className="navbar h-12">
        <div className="navbar-start ">
          {/* <select className="select select-bordered  max-w-xs w-[196px] ml-[10px] rounded-lg border border-gray-200 bg-[#FFFFFF] text-gray-800 ">
              <option selected>
                <span className="text-gray-600 py-2 font-semibold ">
                  CallingBell
                </span>
              </option>
              <option>Greedo</option>
            </select> */}

          <button className="flex justify-between dropdown  dropdown-bottom  w-[196px] ml-[10px] rounded-lg border border-gray-200 bg-[#FFFFFF] text-gray-800 ">
            <div className="flex ml-[10px]">
              <img className="" src={btnImage} alt="" />
              <span className="text-gray-600 py-2 ml-[6px] font-semibold ">
                CallingBell
              </span>
            </div>
            <div className="mt-[14px] mr-3">
              <img className="" src={arrowImage} alt="" />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu duration-500 bg-[white]  rounded-box z-[1] mt-[-45px] ml-[-2px] w-[198px]  p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </button>

          {/* <div className="ml-6 text-lg font-normal">
            <span>finance / </span>
            <span>Dashboard</span>
          </div> */}
        </div>

        <div className="navbar-end">
          <div>
            <button className="btn btn-ghost  ">
              <img src={bell} alt="" />
            </button>
          </div>
          <div>
            <button className="btn btn-ghost  ">
              <img src={allService} alt="" />
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
