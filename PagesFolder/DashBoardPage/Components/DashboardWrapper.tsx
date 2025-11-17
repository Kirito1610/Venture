import { campaignInfo } from "@/Assests";
import Investment from "./InvestmentCard";
import ProfitPieChart from "./ProfitPieChart";
import Revenue from "./Revenue";
import Table from "./Table";
import TopCampaign from "./TopCampaign";

const colorpallet = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function DashboardWrapper() {
  const sortedData = campaignInfo
    .sort((a: any, b: any) => a.revenue - b.revenue)
    .map((item: any, index: number) => {
      return {
        name: item.name,
        value: item.revenue,
        fill: colorpallet[index % 4],
      };
    });
  const coversonData = campaignInfo
    .sort((a: any, b: any) => a.conversions - b.conversions)
    .map((item: any, index: number) => {
      return {
        name: item.name,
        conversions: item.conversions,
        fill: colorpallet[index % 4],
      };
    });
  return (
    <div className="flex max-sm:px-5 sm:p-10 w-full overflow-hidden py-20 bg-[#FFFCFB] flex-col">
      <p className=" text-xl sm:mt-10 font-medium pb-4">DashBoard</p>
      <div className=" flex max-sm:flex-col gap-3">
        <div className=" w-full sm:w-1/2 flex items-start flex-col gap-10">
          <div className=" flex flex-wrap gap-3">
            <Investment />
            <Revenue />
          </div>
          <div className="w-full overflow-hidden max-sm:max-w-[320px] sm:pr-20">
            <p className=" text-xl font-medium mb-4">
              Top Performing Campaigns
            </p>
            <TopCampaign data={coversonData.slice(0, 3)} />
          </div>
        </div>
        <div className=" flex overflow-hidden flex-col gap-3 max-sm:max-w-[320px] w-full sm:flex-1 items-start">
          <p className="text-xl font-medium">Revenue Share Overview</p>
          <ProfitPieChart data={sortedData} />
        </div>
      </div>
      <Table campaignData={campaignInfo} />
    </div>
  );
}

export default DashboardWrapper;
