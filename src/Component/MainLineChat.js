import React from 'react';
import CleanInstall from './CleanInstall';
import FraudulentInstall from './RightInstall/FraudulentInstall';

const MainLineChat = () => {
  return (
    <div className='hover:bg-slate-100 flex border-2 rounded-tr-[10px]  items-center pl-2 w-full justify-between flex-wrap  '>
     <CleanInstall/>
     <FraudulentInstall/>

    </div>
  );
}

export default MainLineChat;

