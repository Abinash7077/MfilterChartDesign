import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {Link} from "react-router-dom"

const Navbar = () => {
  const data = [
    
    {
      name: "Dashboard",
      link: "/Dashboard",
    },
    {
      name: "Practice",
      link: "/Practice",
    },
    {
      name: "Tests",
      link: "/Tests",
    },
  ];
  return (
    <div className=" navbar flex items-center justify-between w-full h-[50px] bg-slate-100 px-4">
      <nav>
        <ul className="flex items-center justify-between gap-7">
          <li className="w-[150px] h-[25px] ">
            <a href="" className="w-full">
              <img src="img/codejudge.png" className="w-full h-full" alt="" />
            </a>
          </li>
         {
            data.map((item,index)=>(
                
              <li className="" key={item.index}>
            <a href={item.link}>{item.name}</a>
            </li>
            ))
         }
        </ul>
      </nav>
      <div className="icon">
        <a href="">
          <AiOutlineUser className="text-blue-700 font-medium text-[25px]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
