import React  from 'react';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';
import left_image from './img/left_tree_border.gif'; 
import item_image from './img/item_16.gif'; 
import group_image from './img/group.gif'; 
import group_image_down from './img/group_down.gif'; 
import ic_down from './img/ic_down.gif'; 
import ic_right from './img/ic_right.gif'; 
import ic_zero from './img/ic_zero.gif'; 
import ic_action_menu from './img/action_icon.gif'; 
import {ItemActioMenu} from '../../common/styleComponent'

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 10+12;
  if (type === 'item') paddingLeft += 5;
  return paddingLeft;
}


const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
`;


const ContextTreeNode = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: #f5f6f8;
border: 1px solid #f5f6f8;
width: 100%;
height:30px;
line-height:32px;
  &:hover {
    background: #e5e9ef;
    border: 1px solid white;
   
  }
`;

const NodeIcon = styled.div`
display: block;
  font-size: 12px;
  margin-left:0px;
  margin-top:5px;
  cursor:pointer;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const NodeIconGroup = styled.div`
  display: block;
  font-size: 12px;
  margin-left: 0px;
  width: 16px;
  height: 16px;
  cursor:pointer;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;


const LeftBorderIcon = styled.img`
width: 0px;
height: 30px;

`;


const ItemIcon = styled.img`
width: 19px;
height: 22px;
align-items: center;
background-color:transparent;
`;


const ItemActionOpen = styled.img`
display:block;
width: 16px;
height: 16px;
align-items: center;
background-color:transparent;
`;



const SpanItem = styled.span`
display:block;
width: 100%;
height: 100%;
text-align: left;
float:left;
`;



const getNodeLabel = (node) => last(node.path.split('/'));

const getActionImage = (node)=> {
  if (node.type === 'group'   && node.isOpen ) {
    return (
      (ic_down) 
    )
  } else if (node.type === 'group'  && !node.isOpen ) {
    return (
      (ic_right) 
    )
  }
    return (
      ( ic_zero ) 
    )
  };

  const getMenuImage = (node)=> {
    if ( node.isActive  ) {
      return (
        (ic_action_menu) 
      )
    }
      
      return (
        ( ic_zero ) 
      )
    };

 

  const TreeNode = (props) => {
  const { node, getChildNodes, level, onToggle, onNodeSelect } = props;

  const ActionImage = getActionImage(node) ;
  const ActionImageMenu = getMenuImage(node);
  
  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.type}>
      <ContextTreeNode level={level} type={node.type}>
        
        <NodeIconGroup onClick={() => onToggle(node)}     
        
        onMouseEnter={() => { 
         node.isActive= true;
        }}
        onMouseLeave={() => { 
          node.isActive= false;
          }} >
        
    
      
     
       <ItemActionOpen src={ActionImage}
        
        onMouseLeave={() => { 
          node.isActive= false;
          onNodeSelect(node);
           }} 
          
            onMouseEnter={() => { 
            node.isActive= true;
            onNodeSelect(node);
           }}
        
        /> 
        



        </NodeIconGroup>

      <LeftBorderIcon src={left_image} />


        
        <NodeIcon  
        
        
        onMouseLeave={() => { 
          node.isActive= false;
          onNodeSelect(node);
           }} 
          
            onMouseEnter={() => { 
            node.isActive= true;
            onNodeSelect(node);
           }}
        
        >
          { node.type === 'item' && <ItemIcon  src={item_image} onClick={() => onNodeSelect(node)} /> }
          { node.type === 'group' && node.isOpen === true && <ItemIcon  src={group_image} onClick={() => onToggle(node)} /> }
          { node.type === 'group' && !node.isOpen && <ItemIcon  src={group_image_down} onClick={() => onToggle(node)} /> }
        </NodeIcon>
        

        <SpanItem role="button" onClick={() => {onNodeSelect(node); onToggle(node); }  }  

        
        
        onMouseLeave={() => { 
          node.isActive= false;
          onNodeSelect(node);
           }} 
          
            onMouseEnter={() => { 
            node.isActive= true;
            onNodeSelect(node);
           }}
        
        >
          { getNodeLabel(node) }
        </SpanItem>

        <ItemActioMenu src={ActionImageMenu}
        
        onMouseLeave={() => { 
          node.isActive= false;
          onNodeSelect(node);
           }} 
          
            onMouseEnter={() => { 
            node.isActive= true;
            onNodeSelect(node);
           }}  
        
        />

        </ContextTreeNode>



      </StyledTreeNode>
      
      { node.isOpen && getChildNodes(node).map(childNode => (
        <TreeNode 
          {...props}
          node={childNode}          
          level={level + 1}
        />
      ))}
    </React.Fragment>
  );
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired,

};

TreeNode.defaultProps = {
  level: 0,
};

export default TreeNode;
