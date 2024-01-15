'use client';
import React, { useState } from 'react';
import { StyledBtn, StyledBtn2, StyledBtnContainer, WrapperContainer } from './HeaderStyleCom';
import Modal from '../Modal/Modal';

const Header = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const openModel=()=>{
    setIsModelOpen(true)
  }
  const closeModel=()=>{
    setIsModelOpen(false)
  }
  return (
      <WrapperContainer>
        <h1> Notes</h1>
        <img src='images/add-icon.png' alt='Add Icon' onClick={openModel}/>
        <StyledBtnContainer className='flex ml-auto'>
          <StyledBtn>All</StyledBtn>
          <StyledBtn2>Only Stared</StyledBtn2>
        </StyledBtnContainer>
      {isModelOpen &&(
        <Modal closeModel={closeModel}/>
      )}
      </WrapperContainer>
  );
};

export default Header;