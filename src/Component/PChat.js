import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './Pchat.css'
import Table from './Table';


const PChat = () => {
    const data02 = [
        { name: 'A1', value: 0.57 },
        { name: 'A2', value: 0.58 },
        { name: 'A3', value:3.78 },
     
       
        
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28' ];
  return (
    <div className="hover:bg-slate-100 w-[49%]  h-full  min-w-[300px] md:gap-4 border-2 border-solid border-gray-400 min-h-[540px] rounded-bl-[10px] pt-4 px-1 box-border ">
           <div className="mx-auto w-[50%] ">
            <div className="flex fraudDesc items-center justify-between gap-16 font-sans">
                <p className='font-sans font-semibold text-md'>Fraud Categories</p>
                <p className='font-sans font-semibold text-md'>Sub Fraud Categories <br />
                for Distribution Fraud</p>
            </div>
            

           </div>
           <div className=" pchart flex items-center flex-col justify-center w-[52%] mx-2">
            <ResponsiveContainer width={350} height={250}>
        <PieChart width={400} height={400}>
         
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
   
  );
}

export default PChat;
