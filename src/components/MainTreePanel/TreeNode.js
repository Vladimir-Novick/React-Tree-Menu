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

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20+16;
  if (type === 'item') paddingLeft += 20;
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
border: 1px solid white;
width: 100%;
height:30px;
line-height:24px;
  &:hover {
    background: #e5e9ef;
    color:#499ed2;
  }
`;

const NodeIcon = styled.div`
display: block;
  font-size: 12px;
  margin-left:5px;
  cursor:pointer;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const NodeIconGroup = styled.div`
  display: block;
  font-size: 12px;
  margin-left:-20px;
  width: 16px;
  height: 16px;
  cursor:pointer;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;


const LeftBorderIcon = styled.img`
width: 8px;
height: 30px;

`;


const ItemIcon = styled.img`
width: 16px;
height: 16px;
align-items: center;
backgrownd-color:transparent;
`;


const ItemActionOpen = styled.img`
display:block;
width: 12px;
height: 12px;
align-items: center;
backgrownd-color:transparent;
`;


const getNodeLabel = (node) => last(node.path.split('/'));

const TreeNode = (props) => {
  const { node, getChildNodes, level, onToggle, onNodeSelect } = props;
 
  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.type}>
      <ContextTreeNode level={level} type={node.type}>
        
        <NodeIconGroup onClick={() => onToggle(node)}
        
       // onMouseEnter={() => setIsShown(node,true)}
      //  onMouseLeave={() => setIsShown(node,false)}
        
        >
          { node.type === 'group' && (node.isOpen ? <ItemActionOpen src={ic_down} /> : <ItemActionOpen src={ic_right} />) }
        </NodeIconGroup>

      <LeftBorderIcon src={left_image} />


        
        <NodeIcon   >
          { node.type === 'item' && <ItemIcon  src={item_image} onClick={() => onNodeSelect(node)} /> }
          { node.type === 'group' && node.isOpen === true && <ItemIcon  src={group_image} onClick={() => onToggle(node)} /> }
          { node.type === 'group' && !node.isOpen && <ItemIcon  src={group_image_down} onClick={() => onToggle(node)} /> }
        </NodeIcon>
        

        <span role="button" onClick={() => onNodeSelect(node)} >
          { getNodeLabel(node) }
        </span>
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
