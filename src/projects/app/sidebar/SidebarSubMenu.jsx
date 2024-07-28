import {  useNavigate } from "react-router-dom";

const SidebarSubMenu = ({ item, onClick }) => {
  const navigate = useNavigate()
  const handleSubMenuClick = (subItem) =>{
    navigate( `/${subItem.id }`)
    onClick(item)
  }
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
              {/* subitem click korle seta dhore state change korte hobe.. and then navigate korte hobe. */}
              <button type="button" onClick={()=>handleSubMenuClick(subItem)}>
                <div
                  key={subItem.id}
                  className="hover:bg-[#fbf0fb] w-[200px] h-[38px] mt-1 ml-3 flex justify-start gap-2 px-[25px] py-[10px]"
                >
                  <img
                    className="w-[20px] h-[20px]"
                    src={subItem.iconL}
                    alt="icon"
                  />
                  <a className="font-medium text-[16px] ">{subItem.title}</a>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarSubMenu;
