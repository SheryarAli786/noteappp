'use client';
import React, { useState } from 'react';
import { StyledBtn, StyledBtnContainer, WrapperContainer } from './HeaderStyle';

interface Headerprops{
  openModel:(item:any)=>void
  onFilterChange: (type: string) => void;
}

const Header:React.FC<Headerprops> =({onFilterChange}) => {
  
const [activeButton, setActiveButton] = useState('');

  const handleAllClick = () => {
    onFilterChange('All');
    setActiveButton('All');
  };

  const handleStarredClick = () => {
    onFilterChange('Starred');
    setActiveButton('Starred');
  };
  
  return (
      <WrapperContainer>
        <h1> Notes</h1>
        <StyledBtnContainer>
          <StyledBtn  active={activeButton === 'All'}  onClick={handleAllClick}>All</StyledBtn>
          <StyledBtn   active={activeButton === 'Starred'} onClick={handleStarredClick}>Only Stared</StyledBtn>
        </StyledBtnContainer>
      </WrapperContainer>
  );
};

export default Header;