const SidebarSubMenu = ({ item }) => {
  
  return (
    <div className="sidebar-submenu">
    <div className="bg-white h-full mt-[64px]">
      <ul className="mt-[0px] w-[231px] overflow-hidden">
        {item?.subMenu?.map((subItem) => (
          <li key={subItem.id}>
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
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SidebarSubMenu;
