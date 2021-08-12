import React, { Component } from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const StyledTreeExplorer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0px left;
  margin-left:50px;
  display: flex;  
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

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
      <StyledTreeExplorer>
        <TreeWrapper>
          <Tree  onSelect={this.onSelect} />
        </TreeWrapper>
        <div>
          { selectedFile && selectedFile.type === 'item' && selectedFile.content }
        </div>
      </StyledTreeExplorer>
    )
  }
}