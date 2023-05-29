import React from "react";

const Table = () => {
  const data = [
    {
      d1: "Distribution Fraud",
      d2: "8,457",
      d4: "0.57%",
      bg: " bg-lime-200",
      hv: "bg-lime-300",
    },
    {
      d1: "Device Fraud",
      d2: "8,637",
      d4: "0.58%",
      bg: " bg-green-200",
      hv: "bg-lime-300",
    },
    {
      d1: "Device Fraud",
      d2: "6,415",
      d4: "0.59%",
      bg: " bg-blue-300",
      hv: "bg-blue-500",
    },
    {
      d1: "Distribution Fraud",
      d2: "8,635",
      d4: "0.58%",
      bg: " bg-teal-300",
      hv: "bg-teal-400",
    },
  ];
  return (
    <>
      {/* table section */}
      <div className=" w-full flex justify-between border-2 h-[220px] overflow-auto min-h-[200px] ">
        <table className="w-full overflow-x-scroll">
          <thead className="min-w-[350px] ">
            <tr className="h-[70px] bg-orange-300 hover:bg-orange-400">
              <th className=" font-bold text-[17px]">Fraud Categories</th>
              <th className="font-bold text-[18px]">Counts</th>
              <th className="font-bold text-[18px]">Fraud %</th>
            </tr>
          </thead>
          <tbody className="overflow-x-scroll">
            {data.map((item) => (
              <>
                <tr className={`h-[50px] bg:${item.bg} hover:${item.hv}`}>
                  <td>{item.d1}</td>
                  <td>{item.d2}</td>
                  <td>{item.d4}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
