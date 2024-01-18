import styled from "styled-components";
export const WrapperContainer=styled.div`
  display:flex;
  padding-top:20px;
  align-items: center;
h1{
    font-weight: 800;
    padding-left: 40px;
    padding-right: 20px;
    font-size: 30px;
    line-height: 36px;
}
img{
    width: 40px;
    height: 40px;
    cursor: pointer;
}
`

export const StyledBtnContainer=styled.div`
  display: flex;
  margin-left: auto;
`
export const StyledBtn = styled.button`
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  padding: 8px 16px;
  margin: 2px;
  font-weight: 500;
  border-radius: 8px;
  font-size: 14px;
  background-color: #1a202c; 
    &:active{
      background-color: gray;
    }
`;
