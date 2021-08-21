import React, { Component } from 'react';
import styled from 'styled-components';
import ic_action_menu from './img/action_icon.gif'; 
import Tree from './Tree';
import  './Tree.css';

const spanMenuItem = styled.span`
display:flex;
width: 250px !important;
height: 30px;
padding-left: 20px;
padding-bottom:5px;
font-size: 1.5em;
font-family: Verdana,  Tahoma, sans-serif, sans-serif;
line-height:1.5;
max-width: 100%;
cursor: pointer;
&:hover {
    background: #e5e9ef;
    color:#499ed2;
  }
`;



const ItemActioTreeMenu = styled.img`
display:block;
width: 34px;
height: 22px;
align-items: center;
float: right;
margin-left:-34px;
cursor:pointer;
background-color:transparent;

`;



const ActionTreePanel = styled.div`
  height:auto;
  width: 250px;
  margin-top:10px;
 padding-left:10px;
  
  display: flex;  
`;





 const spanMenuTitle = styled.span`
display:flex;
width: 100%;
height: 30px;
text-align: center;
line-height:1.5;
font-weight: bold;  
`;







 const TreeWrapper = styled.div`
  width: 250px;
  height:100%;
  background-color:rgb(248, 248, 248);
  padding-top:8px;
  position: relative;
  overflow-y:scroll;
  overflow-x:hidden;

`;

const MenuElement = ({Svg,OnClickFunct,text,Tolltip}) => (

<div class="MenuTreeRow">
<div class="MenuTreeCell"


onClick={() => { 
  if(OnClickFunct){
      OnClickFunct();
  }
 }}



>


  
<svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" role="img" aria-hidden="true"  class='svgMenu'>
  
<path d={Svg} 
         fill="currentColor" 
         fill-rule="evenodd" 
         clip-rule="evenodd"
         />
  </svg>       

<spanMenuItem>
              {text}
              </spanMenuItem>




</div>
</div>


)


export default class TreeExplorer extends Component { 
  state = {
    selectedFile: null,
  };

  componentDidMount() {

   } 

  onSelect = (file) => this.setState({ selectedFile: file });

  render() {
    const { selectedFile } = this.state;

    return (
      

        <div class = "Tree-intro" id="Tree_panel">
          <ActionTreePanel>


          <div class="MenuTree">
     <div class="MenuTreeBody">



     <div class="MenuTreeRow">
     <div class="MenuTreeCellTitle">           

          <spanMenuTitle role="button"  >
              Workspase
          </spanMenuTitle>
<ItemActioTreeMenu src={ic_action_menu}    
        />

</div>
</div>




<MenuElement 

text = "Add Item"
Svg = "M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z"


/>




<MenuElement 

text = "Filter"
Svg = "M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669ZM16.4799 3.52012H3.52013L8.91611 9.96964C8.99036 10.0584 9.03096 10.1698 9.03096 10.2848V16.1155L10.969 15.3856V10.2848C10.969 10.1698 11.0096 10.0584 11.0839 9.96964L16.4799 3.52012Z"


/>


<MenuElement 

text = "Search"
Svg = "M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z"


/>




</div>
</div>

        </ActionTreePanel>
        <TreeWrapper>
          <Tree  onSelect={this.onSelect} />
        </TreeWrapper>
        </div>


    )
  }
}