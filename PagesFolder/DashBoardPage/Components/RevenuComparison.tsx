"use client";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, Legend } from "recharts";

function RevenuComparison({ data }: { data: any }) {
  console.log(data);

  return (
    <div className="w-full max-w-[900px] h-[150px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Tooltip />
          <XAxis dataKey="name" scale="band" />
          <Legend />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenuComparison;
