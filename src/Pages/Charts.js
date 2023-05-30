import React from "react";

import PChat from "../Component/PChat";
import AChat from "../Component/AChat";

const Charts = () => {
  
  
  return (
    <div className="ChartSection ">
      <div className="display chart flex  justify-center gap-1 h-fit box-border flex-wrap mx-auto flex-grow flex-1 py-4  md:py-2">
      <AChat/>
       <PChat/>

        
      </div>
    </div>
  );
};

export default Charts;
