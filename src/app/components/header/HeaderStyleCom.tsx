// CommonBtnStyle.tsx
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
  transition: background-color 0.3s ease;
  outline: none;
  border: none;
  padding: 8px 16px;
  margin: 2px;
  font-weight: 500;
  border-radius: 8px;
  font-size: 14px;

  /* Dark mode styles */
  background-color: #1a202c; 

  &:hover {
    background-color: #4a5568; 
  }

  &:focus {
    ring: 4px solid #90cdf4; 
  }

  &.dark-mode {
    background-color: #2d3748; 

    &:hover {
      background-color: #4a5568; 
    }

    &:focus {
      ring: 4px solid #90cdf4; 
    }
  }
`;
export const StyledBtn2=styled(StyledBtn)`
background-color:gray;
`
