import chart from "../../../../assets/images/01.png";

function FinanceAccounts() {
  return (
    <div className="">
      <h2 className="text-3xl font-medium py-4">Finance Account </h2>
      <div className=" border-t-2 py-4">
        <img src={chart} alt="" />
      </div>

      <div className="h-40 rounded-lg bg-[#FFFFFF] mb-4">
        <div className="p-4">
          <h3 className="">All Channel Performance</h3>
        </div>
      </div>

      <div className=" h-40 rounded-lg bg-[#FFFFFF]">
        <div className="p-4">
          <h3 className="">Breakdown By Status</h3>
        </div>
      </div>
    </div>
  );
}

export default FinanceAccounts;
