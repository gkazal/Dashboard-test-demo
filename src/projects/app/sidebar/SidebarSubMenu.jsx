import { Link, useNavigate } from "react-router-dom";

const SidebarSubMenu = ({ item, onClick, currentPath }) => {
  const navigate = useNavigate();

  console.log(currentPath)
  const handleSubMenuClick = (subItem) => {
    navigate(`/${subItem.id}`);
    onClick(item);
    // console.log(subItem);
    // console.log(subItem.title);
  };
  return (
    <div className="sidebar-submenu mt-[64px]">
      <div className="submenu-title ">
        <img src={item.iconFill} alt="" />
        <span>{item.title}</span>
      </div>
      <div className="bg-white h-full  ">
        <ul className="mt-[0px] w-[231px] overflow-hidden submenu-text">
          {item?.subMenu?.map((subItem) => (
            <li key={subItem.id}>
              {/* subitem click korle seta dhore state change korte hobe..seta acitve a jabe.. and then navigate korte hobe. */}
              <button type="button" onClick={() => handleSubMenuClick(subItem)}>
                <Link to={`/${subItem.id}`}>
                  <div
                    key={subItem.id}
                    className={`hover:bg-[#fbf0fb] w-[200px] h-[38px] mt-1 ml-3 flex justify-start gap-2 px-[25px] py-[10px]  ${
                      
                      currentPath === `/${subItem.id}` ? "active": "" }`}
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src={subItem.iconL}
                      alt="icon"
                    />
                    <a className="font-medium text-[16px] ">{subItem.title}</a>
                  </div>
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarSubMenu;
