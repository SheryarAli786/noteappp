'use client';
import React from 'react';
import { StyledBtn, StyledBtnContainer, WrapperContainer } from './HeaderStyle';
interface Headerprops{
  openModel:(item:any)=>void
  onFilterChange: (type: string) => void;
}
const Header:React.FC<Headerprops> =({openModel, onFilterChange}) => {
  const handleAllClick = () => {
    onFilterChange('All');
  };
  const handleStarredClick = () => {
    onFilterChange('Starred');
  };
  return (
      <WrapperContainer>
        <h1> Notes</h1>
        <img src='images/add-icon.png' alt='Add Icon' onClick={() => openModel('add')}/>
        <StyledBtnContainer>
          <StyledBtn onClick={handleAllClick}>All</StyledBtn>
          <StyledBtn  onClick={handleStarredClick}>Only Stared</StyledBtn>
        </StyledBtnContainer>
      </WrapperContainer>
  );
};

export default Header;