import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LabelList } from 'recharts';

const FraudulentChat = () => {
    const data = [
        {
          name: 'mobaven...',
          pv: 0,
          
          amt: 83,
        },
        {
          name: 'xiaomig..',
          uv: 3000,
          pv: 20,
          amt: 68,
        },
        {
          name: 'gh_cred...',
          uv: 2000,
          pv: 40,
          amt: 55,
        },
        {
          name: 'hasoffe...',
          uv: 2780,
          pv: 60,
          amt: 52,
        },
        {
          name: 'rtbhous...',
       
          pv: 80,
          amt: 51,
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
          <YAxis type="number" domain={[0,100]} label={{ value: '', angle: -90, position: 'insideLeft' }} fontSize={13} fontWeight="bold" tickFormatter={(tick) => { return `${tick}%`; }}  />
          <Tooltip />
          
          <Bar dataKey="amt"  barSize={15} fontSize={11} fill="#f02f11"><LabelList dataKey="amt" position="top" fontSize={11} fontFamily='sansSerif' fontWeight="bold"  /></Bar>
        
        </BarChart>
      </ResponsiveContainer>
      
    </div>
    
  );
}

export default FraudulentChat;
