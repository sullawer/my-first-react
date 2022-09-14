import React from "react";
import './Menuicons.css'; 
import styled from "styled-components"; 
import { IconBase, IconContext } from 'react-icons/lib';



const IconWrapper = styled.div`
  color: ${ props => props.flagHover === true ? '#fc0' : 'white'};
`

const LabelName = styled.div `
color: ${ props => props.flagHover === true ? '#fc0;' : 'white'} ; 

`

const Ikona2 = styled.div `
color: #fc0; 
position:absolute; 
margin-top:35px; 
z-index: 3;

`




function Menuicons2({name, icon, isHovered,icon2}) {
  return (
    <div className="MenuList2">
      <IconContext.Provider value = {{size: "2em"}}>
        <IconWrapper flagHover={isHovered}>  {icon} </IconWrapper> </IconContext.Provider>
        <LabelName  flagHover={isHovered}>   {name}</LabelName>
      <IconContext.Provider value = {{size: '6em'}}><Ikona2 flagHover={isHovered}> {icon2}</Ikona2> </IconContext.Provider>
    </div>
  ); 
}
export default  Menuicons2; 