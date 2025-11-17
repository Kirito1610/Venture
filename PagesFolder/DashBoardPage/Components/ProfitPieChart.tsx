"use client";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
function ProfitPieChart({ data }: { data: any }) {
  return (
    <div className="w-full flex flex-col items-start outline-none max-w-[500px] h-[350px]">
      
      <ResponsiveContainer
        className={"outline-none"}
        width="100%"
        height="100%"
      >
        <PieChart className=" flex outline-none">
          <Tooltip formatter={(value) => `$${value}`} />
          <Pie
            data={data}
            className=" outline-none"
            innerRadius="50%"
            cursor={"Pointer"}
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="10%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={1}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend fontSize={'10px'} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProfitPieChart;
