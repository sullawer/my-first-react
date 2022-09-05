import React from "react";
import './Menuicons.css'; 




function Menuicons2({name, icon}) {
  return (
    <div className="MenuList2">
        <div className="ikona">  {icon} </div>
        <div className="name"> {name}</div>
    </div>
  ); 
}
export default  Menuicons2; 