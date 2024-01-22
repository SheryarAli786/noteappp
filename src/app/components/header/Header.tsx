'use client';
import React from 'react';
import { StyledBtn, StyledBtnContainer, WrapperContainer } from './HeaderStyle';
interface Headerprops{
  openModel:(item:any)=>void
}
const Header:React.FC<Headerprops> =({openModel}) => {
  return (
      <WrapperContainer>
        <h1> Notes</h1>
        <img src='images/add-icon.png' alt='Add Icon' onClick={() => openModel('add')}/>
        <StyledBtnContainer>
          <StyledBtn>All</StyledBtn>
          <StyledBtn>Only Stared</StyledBtn>
        </StyledBtnContainer>
      </WrapperContainer>
  );
};

export default Header;