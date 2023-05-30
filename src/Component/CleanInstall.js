import React from 'react';
import {BiDotsVerticalRounded } from "react-icons/bi";
import InstallLeftLine from './InstallLeftLine';
import './CleanInstall.css'

const CleanInstall = () => {
  return (
    <div className=' w-[50%] clean  '>
      <div className="flex items-center justify-between  mt-4">
       <div className=" block text-left font-semibold "> <p >Clean Installs</p>
        <p className='text-[#19AE54] text-[14px]'>Top % Publishers</p>
        </div>
        <div className="logo">
          <BiDotsVerticalRounded className='text-xl'/>
        </div>
        </div>
        <InstallLeftLine/>
      
    </div>
  );
}

export default CleanInstall;
