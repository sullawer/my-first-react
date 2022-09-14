import React, { useState } from 'react'; 
import './navbar.css'; 
import Menuicons1 from './Menuicons'; 
import Menuicons2 from './Menuicons2'; 
import {FaGamepad, FaSearch, FaShoppingCart, FaBars,FaPlayCircle, FaInternetExplorer, FaEdit, FaPaw, FaStopCircle, FaCaretDown} from 'react-icons/fa'; 
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';



function Navbar() {
  
  const [changeColor, setChangeColor]= useState (false); 
  const [changeColor2, setChangeColor2]= useState (false); 
  const [dropOnlyForGames, setDropdownOnlyForGames]= useState(false);  
  const[dropOnlyForVideo, setDropdownOnlyForVideos]= useState(false); 
 


  return ( 
    <div className='Navbar'>
      <div className="nav-bar-1">
       <ul className="list-1"> 
         <li onMouseEnter={()=>setChangeColor(true)} onMouseLeave= {() => setChangeColor(false)}
         ><a href="#"><Menuicons1 isHovere={changeColor} icon={<FaSearch/> } name="SEARCH"/></a></li>
      
         <li onMouseEnter={()=>setChangeColor2(true)} onMouseLeave= {() => setChangeColor2(false)}
         ><a href="#"><Menuicons1 isHovere={changeColor2} icon={<FaShoppingCart /> }name="SHOP" /></a></li>
       </ul>
    </div>

     <div className="nav-bar-2">
       <div className="logo">
        <img className="logoo" src="images/logo2.PNG"></img>
       </div>
       <ul className="list-2"> 
         <li onMouseEnter={() => setDropdownOnlyForGames(true)} onMouseLeave={() => setDropdownOnlyForGames(false)}><a href="#">
          <Menuicons2 isHovered={dropOnlyForGames}  name="GAMES"  icon={<FaGamepad/>}   icon2={dropOnlyForGames&& <FaCaretDown/>}/> </a></li>


         <li onMouseEnter={()=>setDropdownOnlyForVideos(true) } onMouseLeave={()=> setDropdownOnlyForVideos(false)}><a href="#">
          <Menuicons2 isHovered={dropOnlyForVideo}  name="VIDEOS"   icon={<FaPlayCircle />}  icon2={dropOnlyForVideo&& <FaCaretDown/>} /></a></li>


         <li><a href="#">
          <Menuicons2 name="ANIMALS"  icon={<FaPaw />} /></a></li>
         <li><a href="#">
          <Menuicons2 name="EXPLORE MORE"    icon={<FaStopCircle />} /></a></li>
         <li><a href="#">
          <Menuicons2 name="SUBSCRIBE"  icon={<FaEdit />} /></a></li>
       </ul>

       <div className="hamburger">
        {<FaBars size="3m"/>}
       </div>
     </div>

     <div calssName="probni-div " onMouseEnter={()=>setDropdownOnlyForGames(true)} onMouseLeave={() => setDropdownOnlyForGames(false)}>
       {dropOnlyForGames && <Dropdown/> }
     </div>

     <div calssName="probni-div " onMouseEnter={()=>setDropdownOnlyForVideos(true)} onMouseLeave={() => setDropdownOnlyForVideos(false)}>
       {dropOnlyForVideo && <Dropdown2/> }
     </div>

    </div>
  ); 
 
}



export default Navbar; 