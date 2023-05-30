import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './Pchat.css'
import Table from './Table';

import PLInechat from './PLInechat';


const PChat = () => {
    const data02 = [
        { name: 'A1', value: 0.57 },
        { name: 'A2', value: 0.58 },
        { name: 'A3', value:3.78 },
     
       
        
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28' ];
  return (
    
    <>
    <div className="ptop flex flex-col w-[49%]  h-fit ">

   
    <div className="hover:bg-slate-100 w-full  h-full  min-w-[320px] md:gap-4 border-2  min-h-[540px] rounded-bl-[10px] pt-4 px-1 box-border ">
           <div className="mx-auto w-[50%] ">
            <div className="flex fraudDesc items-center justify-between gap-16 font-sans">
                <p className='font-sans font-semibold text-md'>Fraud Categories</p>
                <p className='font-sans font-semibold text-md'>Sub Fraud Categories <br />
                for Distribution Fraud</p>
            </div>
            

           </div>
           <div className=" pchart flex items-center flex-col justify-center w-[52%] mx-2">
            <ResponsiveContainer className="pie"  width={350} height={250}>
        <PieChart className='pie' width={400} height={400}>
         
          <Pie data={data02} dataKey="value" innerRadius={65} outerRadius={105} fill="#82ca9d" label={{ position: 'insideEnd', fill: 'black' }}  >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      
     

            </div>
            
     <Table/>
     
        </div>
        <div className="hover:bg-slate-100
         plineChat border-2 rounded-tl-[10px]">
            <PLInechat/>
            
        </div>
        </div>
        </>
   
  );
}

export default PChat;
