'use client';
import React, { useState } from 'react';
import { StyledBtn, StyledBtn2, StyledBtnContainer, WrapperContainer } from './HeaderStyleCom';

const Header = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const openModel=()=>{
    setIsModelOpen(true)
  }
  const closeModel=()=>{
    setIsModelOpen(false)
  }
  return (
    <div>
      <WrapperContainer>
        <h1> Notes</h1>
        <img src='images/add-icon.png' alt='Add Icon' onClick={openModel}/>
        <StyledBtnContainer className='flex ml-auto'>
          <StyledBtn>All</StyledBtn>
          <StyledBtn2>Only Stared</StyledBtn2>
        </StyledBtnContainer>
      </WrapperContainer>
    </div>
  );
};

export default Header;
