import React from 'react';
import styled from 'styled-components';



export const ItemActioMenu = styled.img`
display:block;
width: 34px;
height: 22px;
align-items: center;
float: right;
margin-left:-34px;
cursor:pointer;
background-color:transparent;

`;


export const StyledTreeExplorer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0px left;
  margin-left:40px;
  display: flex;  
`;

export const ActionTreePanel = styled.div`
  height:auto;
  width: 250px;
  margin-top:10px;
 padding-left:10px;
  
  display: flex;  
`;





export const spanMenuTitle = styled.span`
display:flex;
width: 100%;
height: 30px;
text-align: center;
line-height:1.5;
`;





export const spanMenuItem = styled.span`
display:flex;
width: 100%;
height: 30px;
padding-left: 20px;
font-size: 1em;
font-family:"Roboto", helvetica, arial, sans-serif;
line-height:1.5;
cursor: pointer;
`;

export const TreeWrapper = styled.div`
  width: 250px;
  height:100%;
  background-color:rgb(248, 248, 248);
  position: fixed;
  overflow-y:scroll;
  overflow-x : hidden;
`;
