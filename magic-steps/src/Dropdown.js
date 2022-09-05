import React from "react";
import Menuicons1 from "./Menuicons";
import './Menuicons'; 


function Dropdown({ name}) {
  return (
   
    <div className="dropdownmenu">
    <ul class="dropdown">
              <li><a href="#"><Menuicons1   name="QUIZZES"/></a></li>
              <li><a href="#"><Menuicons1   name="PERSONALITY QUIZZES"/></a></li>
              <li><a href="#"><Menuicons1   name="PUZZLES"/></a></li>
              <li><a href="#"><Menuicons1  name="ACTION"/></a></li>
              <li><a href="#"><Menuicons1   name="FUNNY FILL-IN"/></a></li>
           </ul>
   </div> 
  ); 
}


export default Dropdown;

