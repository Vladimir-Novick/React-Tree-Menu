import React, { Component } from 'react';
import './menu.css';


class MenuWindow extends Component {


    constructor(props) {
        super(props);
        this.showHelp = true;
        this.handleClick = this.handleClick.bind(this);
      }


    handleClick(e) {
        if ( !this.currentNode){
            this.currentNode = document.getElementById(this.props.id);  
        }
        this.currentNode.style.visibility='hidden';

      }
    
    render() {



            return (

                <div class="menu-splash-screen"    id={this.props.id} 
                
                onClick={this.handleClick}

                
                >

                <div class="menu-window-base"  >
                    
                    <div class="menu-window-Bubble">
                
                
                
                Menu text
                
                </div></div>
               
                </div>
            )
        }
    };



export default MenuWindow;
