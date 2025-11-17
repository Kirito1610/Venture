"use client";
import { useState } from "react";
import PromptResult from "./PromptResult";
import PromptInput from "./PromptInput";

function PromptPlayground({
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
}) {
  const [prompt, setPropmt] = useState("");
  return (
    <div className="pt-20 h-[95vh] flex items-center justify-between flex-col w-full px-10">
      <PromptResult data={data} prompt={prompt} />
      <PromptInput setPropmt={setPropmt} />
    </div>
  );
}

export default PromptPlayground;
