import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {BiDotsVerticalRounded } from "react-icons/bi";
import {IoIosPeople } from "react-icons/io";
import './pline.css'
const PLInechat = () => {
    const data = [
        {
            dataora: "16-05-2019",
          uv: 14,
          pv: 13,
     
        },
        {
            dataora: "17-05-2019",
          uv: 9,
          pv: 8,
        
        },
        {
            dataora: "18-05-2019",
          uv: 12,
          pv: 5,
         
        },
        {
            dataora: "19-05-2019",
          uv: 10,
          pv: 12.8,
        
        },
        {
            dataora: "20-05-2019",
          uv: 13,
          pv: 13.9,
          
        },
        {
            dataora: "21-05-2019",
          uv: 13.2,
          pv: 12.9,
     
        },
      
      ];
  return (
    <>
    <div className=" pline heading pt-4 pb-2 ml-4 flex items-center justify-between ">
        <div className="">
        <p className='text-[14px] text-left font-bold  '>
        Distribution Fraud <span className='text-[12px] font-semibold'>Over Date</span>
        </p>
        <p className='text-left text-[13px]'>
        8,457 <span className='ml-2'>0.57
%</span>   
        </p>
        </div>
        <div className="icon mr-5 flex items-center ">
            <IoIosPeople className='text-3xl' />
        <BiDotsVerticalRounded className='text-xl'/>
        </div>
       
       
    </div>
    <div classdate='totalInstallFRaud w-full py-2'>
         <ResponsiveContainer width="100%" height={324}>
        <BarChart
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
          
          <Bar dataKey="pv" barSize={45} fontSize={11}stackId="a" fill="#00e5fe" />
          
         
        </BarChart>
      
      </ResponsiveContainer>
    </div>
    </>
   
  );
}

export default PLInechat;
