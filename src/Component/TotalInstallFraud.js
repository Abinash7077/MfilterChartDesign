import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Line } from 'recharts';
import {ComposedChart} from 'recharts'

const TotalInstallFraud = () => {
    const data = [
        {
            dataora: "16-05-2019",
          uv: 14,
          pv: 13,
          amt: 2,
        },
        {
            dataora: "17-05-2019",
          uv: 9,
          pv: 13,
          amt: 2,
        },
        {
            dataora: "18-05-2019",
          uv: 12,
          pv: 12.1,
          amt: 1.9,
        },
        {
            dataora: "19-05-2019",
          uv: 10,
          pv: 12.8,
          amt: 2,
        },
        {
            dataora: "20-05-2019",
          uv: 13,
          pv: 13.9,
          amt: 1.8,
        },
        {
            dataora: "21-05-2019",
          uv: 13.2,
          pv: 12.9,
          amt: 2.1,
        },
        {
            dataora: "22-05-2019",
          uv: 10.5,
          pv: 10.7,
          amt: 3.9,
        },
      ];
  return (
    <>
    <div className="border-2 hover:bg-slate-100  rounded-tr-[10px]">
    <div className="heading pt-4 pb-2 ml-4  ">
        <p className='text-[14px] text-left font-bold  '>
        Total Installs / Fraudulent Installs <span className='text-[12px] font-semibold'>Over Date</span>
        </p>
       
    </div>
    <div classdate='totalInstallFRaud w-full py-2'>
         <ResponsiveContainer width="100%" height={350}>
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dataora" fontSize={13}  fontWeight="bold"/>
          <YAxis type="number" domain={[0,16]} label={{ value: '', angle: -90, position: 'insideLeft' }} fontSize={13}  fontWeight="bold" />
          <Tooltip />
          
          <Bar dataKey="pv" barSize={35} fontSize={11}stackId="a" fill="#19AE54" />
          <Bar dataKey="amt" stackId="a" fill="#f02f11" />
          <Line type="monotone" dataKey="uv" stroke="#f02f11"  />
        </ComposedChart>
      
      </ResponsiveContainer>
    </div>
    </div>
    </>
  );
}

export default TotalInstallFraud;
