"use client";
import { useEffect, useState } from "react";

import { FunnelPlus } from "lucide-react";
import {CampaignInfo } from "../types";
import { applyfilter, handleBodyOveflow } from "../actions";
import FilterPopup from "./FilterPopup";

function Table({ campaignData }: { campaignData:  {
    name: string;
    revenue: number;
    spent: number;
    platform: string;
    status: string;
    ctr: number;
    clicks: number;
    startDate: string;
    endDate: string;
    impressions: number;
    conversions: number;
}[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  handleBodyOveflow({ dependency: isOpen });
  const [filter, setFilter] = useState({
    startDate: "",
    endDate: "",
    status: "",
  });

  const filteredCampaigns = applyfilter({ campaignData, filter });
  return (
    <div className="flex w-full flex-col border-t border-[#0C2B4E] pt-7  gap-5 mt-10">
      <div className="flex flex-wrap items-center pr-10 justify-between">
        <h3 className=" text-2xl font-medium">Campaign Overview</h3>
        <div>
          {isOpen && (
            <FilterPopup
              onClose={handleClose}
              filter={filter}
              onApply={setFilter}
              onClear={() => {
                setFilter({ startDate: "", endDate: "", status: "" });
              }}
            />
          )}
          <div
            onClick={() => setIsOpen(true)}
            className=" w-8 rounded-full items-center justify-center cursor-pointer hover:bg-[#F8F4EC] h-8 flex"
          >
            <FunnelPlus className="w-5 " />
          </div>
        </div>
      </div>
      <div className=" w-full max-sm:max-w-[300px] overflow-scroll">
      <table className=" text-left border-collapse w-full mx-auto">
        <tbody>
          <tr className=" text-[#44444E] bg-[#efefef]">
            <th className=" px-3 py-1 font-medium border-[#dddddd]">S. No</th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">
              Campaign Name
            </th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">
              Amount Spent
            </th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">
              Revenue{" "}
            </th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">Plaform</th>
            <th className=" px-3 py-1 font-medium border-[#dddddd]">Status</th>
          </tr>
          {filteredCampaigns.map((item: any, index: number) => (
            <tr key={item.name}>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {index + 1}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {item.name}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                $ {item.spent}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                $ {item.revenue}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {item.platform}
              </td>
              <td className="border-b text-[15px] text-left px-3 py-2 border-[#dddddd]">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Table;
