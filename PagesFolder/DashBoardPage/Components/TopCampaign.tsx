'use client';
import { Bar, BarChart, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function TopCampaign({data,toltipValue='conversions'}:{toltipValue?:string;data:any}) {
  return (
       <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <BarChart  data={data}>
          <XAxis dataKey="name" interval={0}  tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar isAnimationActive={true} dataKey={toltipValue} radius={[8, 8, 0, 0]}>
            {data.map((entry:any, index:number) => (
              <Cell key={index} width={80} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopCampaign