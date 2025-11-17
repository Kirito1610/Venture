import TopCampaign from "@/PagesFolder/DashBoardPage/Components/TopCampaign";
import { CampaignInfo } from "@/PagesFolder/DashBoardPage/types";
import ResponseTable from "./ResponseTable";

function PromptResult({
  prompt,
  data,
}: {
  data: {
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
  }[];
  prompt: string;
}) {
  const isCtr = prompt.toLowerCase().includes("ctr");
  const status = prompt.toLowerCase().includes("pause")
    ? "Paused"
    : prompt.toLowerCase().includes("active campaign")
    ? "Active"
    : prompt.toLowerCase().includes("complete")
    ? "Completed"
    : "";
  const colorpallet = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const sortedData = data.sort((a: any, b: any) => a.ctr - b.ctr);
  const filterByStatus = data.filter((item: any) => item.status === status);
  const isBestPerofroming =
    prompt.toLowerCase().includes("best performing") ||
    prompt.toLowerCase().includes("top performing") || prompt.toLowerCase().includes("top campaigns");
  const coversonData = data
    .sort((a: any, b: any) => a.conversions - b.conversions)
    .map((item: any, index: number) => {
      return {
        name: item.name,
        conversions: item.conversions,
        fill: colorpallet[index % 4],
      };
    });
  return (
    <div className=" w-full flex items-center justify-center  flex-1 overflow-auto">
      {prompt.length > 0
        ? !isCtr &&
          status.length <= 0 &&
          !isBestPerofroming && (
            <p className="text-center text-xl font-medium">
              No results found — please write a valid prompt.
            </p>
          )
        : ""}
      {prompt.length <= 0 && (
        <p className="text-center text-xl font-medium">
          Start exploring prompts to generate insights instantly.
        </p>
      )}
      {isCtr && (
        <TopCampaign
          toltipValue="CTR"
          data={sortedData.slice(0, 4).map((item: any, index: number) => {
            return {
              name: item.name,
              CTR: item.ctr,
              fill: colorpallet[index % 4],
            };
          })}
        />
      )}
      {status && <ResponseTable tabelData={filterByStatus} />}
      {isBestPerofroming && <TopCampaign data={coversonData.slice(0, 4)} />}
    </div>
  );
}

export default PromptResult;
