import styled from 'styled-components';
import React,{useState} from 'react';

const MenubarStyle = styled.div`
.topnav {
    overflow: hidden;
    background-color: #ffffff;
  }
  
  .topnav a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
    border-bottom: 3px solid transparent;
    font-weight:600;
    font-family: 'Lato', sans-serif;
  }
  
  .topnav a:hover {
    border-bottom: 3px solid red;
  }
  
  .topnav a.active {
    border-bottom: 3px solid red;
  }
`;

const Menubar = () => {
    return (
        <MenubarStyle>
        <div className="topnav">
            <a className="active" href="#home">All (2)</a>
            <a href="#news">Primary (2)</a>
            <a href="#contact">Guest (0)</a>
            <a href="#contact">IoT (0)</a>
            
        </div>
        </MenubarStyle>
    )
}

export default Menubar;