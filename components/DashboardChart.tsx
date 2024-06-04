import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '',
    uv: 0.75,
  },
  {
    name: 'Mon',
    uv: 1.2,
  },
  {
    name: 'Tue',
    uv: 1.5,
  },
  {
    name: 'Wed',
    uv: 1.3,
  },
  {
    name: 'Thu',
    uv: 2.8,
  },
  {
    name: 'Fri',
    uv: 2.8,
  },
  {
    name: 'Sat',
    uv: 4.7,
  },
  {
    name: 'Sun',
    uv: 7.5,
  },
];

const customLabels: { [key: number]: string } = {
  0: '0GB',
  2: '1GB',
  4: '3GB',
  6: '5GB',
  8: '10GB',
};

const formatYAxisTick = (tick: number) => {
  return String(customLabels[tick]) || String(tick);
};

const CustomTooltip = ({ active, payload }: { active: any; payload: any }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black rounded p-2">
        <p className="text-white text-[10px]">{`${payload[0].payload.name}: ${payload[0].value} GB`}</p>
      </div>
    );
  }

  return null;
};

export default function DashboardChart() {
  return (
    <div className="max-w-[892px] px-10 m-auto mt-8 bg-white rounded">
      <span className="pt-5 pb-5 font-bold">Data usage per network</span>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} stroke="#ccc" strokeOpacity={0.5} />

          <XAxis
            dataKey="name"
            axisLine={{ stroke: '#ccc', strokeWidth: 0.5 }}
            tick={{ fill: '#ccc', fontSize: 12 }}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: '#ccc', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxisTick}
          />
          <Tooltip content={<CustomTooltip active payload />} />
          <Line
            type="natural"
            dataKey="uv"
            stroke="#000"
            activeDot={{ r: 8 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
