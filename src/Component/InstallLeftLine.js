import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LabelList } from 'recharts';

const InstallLeftLine = () => {
    const data = [
        {
          name: 'Facebook',
          pv: 0,
          
          amt: 98,
        },
        {
          name: 'dv360_Ichbx',
   
          pv: 20,
          amt: 98,
        },
        {
          name: 'Biblinkds',
        
          pv: 40,
          amt: 97,
        },
        {
          name: 'aura_infsfs',
        
          pv: 60,
          amt: 96,
        },
        {
          name: 'trademarknj',
         
          pv: 80,
          amt: 95,
        },
      
      
      ];
  return (
    <div className=' flex items-center justify-center mt-6'>
        <ResponsiveContainer width="100%" height={300
        }>
        <BarChart
          width={0}
          height={0}
          data={data}
          margin={{
            top: 15,
            right: 2,
            left: 2,
            bottom: 25,
          }}
         
        >
          <CartesianGrid horizontal="true" vertical=""  />
          <XAxis dataKey="name" angle={-45} fontSize={10} fontWeight="bold" />
          <YAxis type="number" domain={[0,100]} label={{ value: '', angle: -90, position: 'insideLeft' }} fontSize={13}  fontWeight="bold" tickFormatter={(tick) => { return `${tick}%`; }} />
          <Tooltip />
          
          <Bar dataKey="amt"  barSize={15} fontSize={11} fill="#19AE54"><LabelList dataKey="amt" position="top" fontSize={12} fontWeight="bold" fontFamily='sansSerif' /></Bar>
        
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
}

export default InstallLeftLine;
