import React from "react";
import './Menuicons.css'; 
import styled, {css} from "styled-components";
import { IconBase, IconContext } from 'react-icons/lib';



const Ime=styled.div `
color: ${props => props.fHover=== true ? '#fc0' : 'white'}; 
margin-left: 5 px; 
`

const Ikona=styled.div `
color: ${props => props.fHover=== true ? '#fc0' : 'white'}; 
margin-left: 10px; 

`

function Menuicons1({icon, name,isHovere }) {
  return (
    <div className="MenuList">
        <Ime  fHover={isHovere}> {name}</Ime>
        <Ikona fHover={isHovere}>{icon} </Ikona>
    </div>
  ); 
}


export default Menuicons1;

