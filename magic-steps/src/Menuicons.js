import React from "react";
import './Menuicons.css'; 

function Menuicons1({icon, name}) {
  return (
    <div className="MenuList">
        <div className="name"> {name}</div>
        <div className="ikona">  {icon} </div>
    </div>
  ); 
}


export default Menuicons1;

