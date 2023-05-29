import React from 'react';
import CleanInstall from './CleanInstall';
import FraudulentInstall from './RightInstall/FraudulentInstall';

const MainLineChat = () => {
  return (
    <div className='flex border-2 rounded-tr-[10px]  items-center pl-2 w-full justify-between   '>
     <CleanInstall/>
     <FraudulentInstall/>

    </div>
  );
}

export default MainLineChat;

