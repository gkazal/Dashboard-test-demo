import { Link } from "react-router-dom";

const SidebarItem = ({ item, onClick, active }) => {
  return (
    <div>
      <button type="button" className=" w-full" onClick={onClick}>
        {/* active hole class a active show hobe na hole sitebarIconHover show hobe.. */}
        <Link to={`/${item.id}`}>
          <div
            className={`flex flex-col items-center sidebar-image-hover  ${
              active ? "active" : ""
            }`}
          >
            <div className="size-[30px]  mb-2 dropdown ">
              <img className="w-full" src={item.iconLine} alt="icon" />
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
