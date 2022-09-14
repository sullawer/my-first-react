import React from 'react'; 
import styled from 'styled-components'; 
import './Menuicons.css'; 
import './navbar.css'; 




const TITLE=styled.div `
color:white; 
font-size: 17px;
font-weight: 400;
letter-spacing: 3px;
margin-bottom: 8px;  
padding-top: 10px; 

`







export default function Middle() {
  return (
    <div class="middle-content">
     <div class="middle-window">

    <div className="video">
        <iframe src="https://www.youtube.com/embed/JQ2WZPWuMvg?controls=0&amp;modestbranding=1&amp;showinfo=0" title="NatGeoVideo"
         frameborder="0" allowfullscreen></iframe>
      </div>

     <p className='text'>
        <TITLE>         CUTEST CRITTERS YOU'LL WANT TO CUDDLE </TITLE>
         Watch as we count down the either CUTEST CRITTERS we can't stop cooing over!               
      </p>
      </div> 
    </div>

  );
}
