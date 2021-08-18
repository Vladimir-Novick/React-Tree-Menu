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
  height:100%;
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
font-weight: bold;  
`;







export const TreeWrapper = styled.div`
  width: 250px;
  height:100%;
  background-color:rgb(248, 248, 248);
  padding-top:8px;
  position: relative;
  overflow-y:scroll;
  overflow-x : hidden;
`;
