
const SidebarItem = ({ item, onClick, active }) => {

  
  return (
    <div>
      <button type="button" className=" w-full" onClick={onClick}  onMouseEnter={onClick} >
        {/* active hole class a active show hobe na hole sitebarIconHover show hobe.. */}
        <div
          className={`flex flex-col items-center  ${
            active ? "active" : ""
          }`}
        >
          <div className="size-[30px]  mb-2 dropdown ">
            <img className="w-full" src={item.iconLine} alt="icon" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="">{item.miniTitle}</span>
        </div>
      </button>
    </div>
  );
};

export default SidebarItem;
