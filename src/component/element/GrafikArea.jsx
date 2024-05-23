import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: 'Data 1',
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Data 2',
    uv: 70,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Data 3',
    uv: 50,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Data 4',
    uv: 90,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Data 5',
    uv: 60,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Data 6',
    uv: 40,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Data 7',
    uv: 30,
    pv: 4300,
    amt: 2100,
  },
];

const cardinal = curveCardinal.tension(0.2);

const GrafikArea = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#FBDA64" fill="#FBDA64" fillOpacity={0.7} />
    </AreaChart>
  </ResponsiveContainer>
  );
};

export default GrafikArea;
