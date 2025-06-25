'use client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Models
import { ChartItem } from '@models/chart';
import { Prefecture } from '@models/prefecture';

type Props = {
  items: Array<ChartItem>;
  prefectures: Array<Prefecture>;
  colors: Array<string>;
}

export default function Chart({items, prefectures, colors}: Props) {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={1000}
        height={1000}
        data={items}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{left: 20, right: 20}} />
        <YAxis />
        <Tooltip />
        <Legend />
        {prefectures.map((prefecture: Prefecture, i: number) => {
          return (
            <Line key={prefecture.prefCode}
              type="monotone"
              dataKey={`pref${prefecture.prefCode}`}
              stroke={colors[i]}
              name={prefecture.prefName}
              activeDot={{r: 8}}
            />
          )
        })}
        
      </LineChart>
    </ResponsiveContainer>

  )

}