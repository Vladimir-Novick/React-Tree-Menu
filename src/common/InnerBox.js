import React  from 'react';
import styled from 'styled-components';


export default class InnerBox extends React.Component {
 

  state = {
    isActive:false
 }

 constructor() {
  super();
  this.hideComponent = this.hideComponent.bind(this);
}

 handleShow = ()=>{
  this.setState({
      isActive: true
  })
}

handleHide = () =>{
  this.setState({
      isActive: false
  })
}

    render() {

   
      return (

        <div  
        onMouseEnter={() => {this.handleShow()}}
        onMouseLeave={() => {this.handleHide()}} >
       
       {
       
       this.props.children.map(
        node => (node)
       )
       
       
       }
        </div>
      );
    }
  }