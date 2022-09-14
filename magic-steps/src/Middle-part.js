import React from 'react'; 
import styled from 'styled-components'; 
import './Menuicons.css'; 
import './navbar.css'; 
import ReactPlayer from 'react-player';

const TITLE=styled.div `
color:white; 
font-size: 16px;
font-weight: 400;
letter-spacing: 3px;
margin-bottom: 8px;  
padding-top: 10px; 

`







export default function Middle() {
  const poster="vieo-bg.jpg";
  return (
    <div class="middle-content">
     <div class="middle-window">

     <ReactPlayer 
      controls 
      width='902px'
      height='507px'
      poster={poster}
      url='https://www.youtube.com/watch?v=nsOtOye-DJM'  
      />
     
      <p className='text'>
        <TITLE> CALIFORNIA </TITLE>
       MC Cali the valley quail takes Barry the bald eagle around the United States's most populated state: California. 
       The Golden State has the largest economy of any state in the country. 
       From agriculture to technology to movie-making, Californians keep busy while enjoying some of the most stunnin...
      </p>
      </div> 
    </div>

  );
}
