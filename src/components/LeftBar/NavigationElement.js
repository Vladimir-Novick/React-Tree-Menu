import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LeftBar.css';
import { withRouter   } from 'react-router-dom'


const TooltipBox = ({ TolltipText, id }) => (


    <div class="leftbar-Tolltip-base" id={id}   ><div class="leftbar-tooltip-Bubble"><div class="leftbar-tooltip-BaseArrow"></div>{TolltipText}</div></div>



)

// prroperties:
//     Svg, OnClickFunct, Tolltip, idElement
//
class NavigationElement extends Component {

    

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.showHelp = true;
       
      }


        
    handleClick(e) {
        this.showHelp = false;
        if ( !this.tooltipElement){
            this.tooltipElement = document.getElementById(this.props.idElement);  
        }
        this.tooltipElement.style.visibility='hidden';
        if (this.props.OnClickFunct) {
            this.props.OnClickFunct(e);
        } else {
            if (this.props.idElement.startsWith("/")){
                let link = this.props.idElement;
                this.props.history.push(link);
            }
        }
      }

    render() {



            return (


                


                <div class="navigation-element"

                onClick={this.handleClick}


                    onMouseEnter={e => {
                        if (this.showHelp){
                            if ( !this.tooltipElement){
                                this.tooltipElement = document.getElementById(this.props.idElement);  
                            }
                          this.tooltipElement.style.visibility='visible';
                        }
                    }}
                    onMouseLeave={e => {
                        this.showHelp = true;
                        this.tooltipElement = document.getElementById(this.props.idElement);
                          this.tooltipElement.style.visibility='hidden';
                    }}
                >


                    <TooltipBox TolltipText={this.props.Tolltip}
                        id={this.props.idElement}
                    />


                    <svg class="MSvgIcon-root" focusable="false" viewBox="0 0 24 24" width="22" height="22" role="img" aria-hidden="true" >
                       <path d={this.props.Svg}
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>

            )
        }
    };

    NavigationElement.propTypes = {
        OnClickFunct: PropTypes.any,
      };

export default withRouter(NavigationElement);
