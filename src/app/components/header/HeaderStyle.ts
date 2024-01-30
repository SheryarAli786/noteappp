import {Flex} from "@/app/globalFlex";
import styled from "styled-components";

export interface StyledBtnProps {
  active: boolean;
}

export const WrapperContainer=styled(Flex)`
  padding-top:20px;
  align-items: center;
  position: relative;
h1{
  font-weight: 800;
  padding-left: 40px;
  padding-right: 20px;
  font-size: 30px;
  line-height: 36px;
}
`
export const AddIcon=styled.img`
  width: 30px;  
  height: 30px;
  padding: 10px;
  z-index: 4;
  border-radius: 50px;
  background-color: black;
  position: absolute;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  &:hover{
    background-color: brown;
  }
`
export const StyledBtnContainer=styled(Flex)`
  margin-left: auto;
`
export const StyledBtn = styled.button<StyledBtnProps>`
  cursor: pointer;
  color: ${({ active }) => (active ? "white" : "black")};
  outline: none;
  border: none;
  padding: 8px 16px;
  margin: 2px;
  font-weight: 500;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${({ active }) => (active ? "black" : "white")};
  border:1px solid black;
`;
