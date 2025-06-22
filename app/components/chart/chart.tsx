'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Models
import { ChartItem, ChartYear } from '@models/chart';
import { GetYears } from '@/app/utils/chart';


type Props = {
  items: Array<ChartItem>
}

export default function Chart({items}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
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
        <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        {GetYears(items).map((year: ChartYear, i: number) => {
          return year.keys.map((key: string, j: number) => {
            return (
              <Line
                type="monotone"
                dataKey={key}
                stroke="#8884d8"
                name={year.year}
                activeDot={{ r: 8 }}
              />
            )
          });
        })}
        
      </LineChart>
    </ResponsiveContainer>

  )

}