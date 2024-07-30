import { Link } from "react-router-dom";

const SidebarItem = ({ item, onClick, active }) => {
  return (
    <div className="sidebar-hover">
      <button
        type="button"
        className={`w-full ${active ? "active" : ""}`}
        onClick={onClick}
      >
        {/* ekane statically finace or user a click korle tader submenu te jeye automatic vabe dashboard route a jabe */}
        <Link to={`/${item.subMenu[0].id}`}>
          {/* active hole class a active show hobe na hole sitebarIconHover show hobe.. */}

          <div className="flex flex-col items-center sidebar-image-hover">
            <div className="size-[30px]  mb-2 dropdown img-wrapeer">
              <img className="w-full" src={item.iconLine} alt="icon" />
              <img className="w-full" src={item.iconFill} alt="icon" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="sidebar-title">{item.miniTitle}</span>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default SidebarItem;
