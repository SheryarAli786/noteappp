'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { StyledBtn, StyledBtnContainer, WrapperContainer } from './HeaderStyle';
import Modal from '../Notes/Modal/Modal';
interface Headerprops{
  setShowModal:Dispatch<SetStateAction<boolean>>;
  refresher:()=>void;
  showModel:boolean;
  onDataUpdate:()=>void
}
const Header:React.FC<Headerprops> = ({setShowModal, showModel, refresher,onDataUpdate}) => {
  const openModel=()=>{
    setShowModal(true)
  }
  const closeModel=()=>{
    setShowModal(false)
  }
  return (
      <WrapperContainer>
        <h1> Notes</h1>
        <img src='images/add-icon.png' alt='Add Icon' onClick={openModel}/>
        <StyledBtnContainer>
          <StyledBtn>All</StyledBtn>
          <StyledBtn>Only Stared</StyledBtn>
        </StyledBtnContainer>
      {showModel &&(
        <Modal closeModel={closeModel}  refresher={refresher} onDataUpdate={onDataUpdate}/>
      )}
      </WrapperContainer>
  );
};

export default Header;