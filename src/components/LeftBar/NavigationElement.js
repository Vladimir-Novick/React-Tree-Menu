import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './LeftBar.css';



const TooltipBox = ({ TolltipText, id }) => (


    <div class="leftbar-Tolltip-base" id={id}   ><div class="leftbar-tooltip-Bubble"><div class="leftbar-tooltip-BaseArrow"></div>{TolltipText}</div></div>



)

// prroperties:
//     Svg, OnClickFunct, Tolltip, idElement

class NavigationElement extends Component {

    

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

      
        
    handleClick() {
        console.log('Click happened');
        if (this.props.OnClickFunct) {
            this.props.OnClickFunct();
        }
      }

    render() {



            return (

                <div class="navigation-element"

                onClick={this.handleClick}


                    onMouseEnter={e => {
                        var tooltipElement = document.getElementById(this.props.idElement);
                        tooltipElement.style.visibility='visible';
                    }}
                    onMouseLeave={e => {
                        var tooltipElement = document.getElementById(this.props.idElement);
                        tooltipElement.style.visibility='hidden';
                    }}


                >


                    <TooltipBox TolltipText={this.props.Tolltip}
                        id={this.props.idElement}
                    />


                    <svg class="MSvgIcon-root" focusable="false" viewBox="0 0 24 24" width="22" height="22" role="img" aria-hidden="true"




                    >




                        <path d={this.props.Svg}
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                        </path>
                    </svg>
                </div>

            )
        }
    };



export default NavigationElement;
