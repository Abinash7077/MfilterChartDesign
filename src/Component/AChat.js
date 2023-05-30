import React from 'react';
import './AChat.css'
import {
    ResponsiveContainer,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area
  } from "recharts";
import MainLineChat from './MainLineChat';
import TotalInstallFraud from './TotalInstallFraud';
const AChat = () => {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 13000,
        },
        {
          name: "Page A",
          uv: 4000,
          pv: 15000,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 14000,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 16000,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 14599,
          },
          {
            name: "Page C",
            uv: 2000,
            pv: 18000,
          },
        
      ];
  return (
    <div className='flex flex-col w-[49%] Achat h-fit'>
   
    <div className=" achat hover:bg-gray-100 w-full h-fit min-w-[350px]  px-2 py-2 border-2 rounded-br-[10px]  lg:min-h-[510px]">
    <h1 className="tex=xt-center pb-6 pt-4">Total Installs vs Fraudulent Installs</h1>
  <ResponsiveContainer width="100%" height={250} >
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
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="10">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="50%" stopColor="#82ca9d" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          
        </linearGradient>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
</linearGradient>
      </defs>
      <CartesianGrid horizontal="true" vertical="" />
      <XAxis tick={false}
    
       />
      <YAxis dataKey="pv" tick={{ stroke: "green", fontSize:"14px" ,fontWeight:"300", letterSpacing:"1px" }} />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  </ResponsiveContainer>
  <div className="flex installDesc items-center justify-center md:justify-start flex-col font-sans">
  <p className="lg:text-center font-sans md:text-left">Total Installs</p>
  <p className="text-blue-700 font-bold">1.5m</p>
  </div>
  <div className="float-right fraudInstall px-10 py-6">
  <p className="">Fraudulent Installs</p>
  <p className="text-red-700 font-bold">74k <span className="ml-2">5%</span></p>
  </div>

  <div className="float-left px-14 organic py-14">
 <div className="flex  items-center justify-between gap-16">
 <div className="flex items-center justify-center flex-col ">
  <p className="text-center hover:text-red-700 hover:font-bold ">Organic</p>
  <p className=" font-bold   hover:text-blue-700 hover:font-bold ">360k</p>
  </div>
  <div className="flex items-center justify-center flex-col">
  <p className="text-center  hover:text-red-700 hover:font-bold ">Non Organic</p>
  <p className=" font-bold  hover:text-blue-700 hover:font-bold ">1.1M</p>
  </div>
 </div>
  </div>
  

 
</div>
<MainLineChat/>
<TotalInstallFraud/>

</div>
  );
}

export default AChat;
