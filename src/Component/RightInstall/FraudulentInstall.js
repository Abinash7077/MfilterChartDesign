import React from 'react';
import {BiDotsVerticalRounded } from "react-icons/bi";
import FraudulentChat from './FraudulentChat';

const FraudulentInstall = () => {
  return (
    <div className=' w-[50%] fraud'>
    <div className="flex items-center justify-between  mt-4">
     <div className=" block text-left font-semibold "> <p >Fraudulent Installs</p>
      <p className='text-[#f02f11] text-[14px]'>Top % Publishers</p>
      </div>
      <div className="logo">
        <BiDotsVerticalRounded className='text-xl'/>
      </div>
      </div>
      <FraudulentChat/>
     
    
  </div>
  );
}

export default FraudulentInstall;
