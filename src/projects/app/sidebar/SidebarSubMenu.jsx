import { Link, useNavigate } from "react-router-dom";

const SidebarSubMenu = ({ item, onClick, currentPath }) => {
  const navigate = useNavigate();

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
                  {/* submenu te click korle seta path dia dhorbo jemon subItem.id jeta hobe seta pathname ar sate same hobe seta dia
                dhore amra active thik korbo...
                */}
                  <div
                    key={subItem.id}
                    className={`subMenu-size  ${
                      currentPath === `/${subItem.id}` ? "active" : ""
                    }`}
                  >
                    <div className="sub-img-wrapeer">
                      <img
                        className="w-[20px] h-[20px]   "
                        src={subItem.iconL}
                        alt="icon"
                      />
                      <img
                        className="w-[20px] h-[20px]  "
                        src={subItem.iconF}
                        alt="icon"
                      />
                    </div>
                    <a className="font-medium text-[16px] subItem-title">
                      {subItem.title}
                    </a>
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
