import styled from "styled-components";
export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -11px;
  right: -6px;
  opacity: 0;
  transition: opacity 0.3s ease; 
  cursor: pointer;
`;
export const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    position: relative;
    &:hover ${CloseIcon} {
    opacity: 1;
  }
`
export const MainContainer=styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 280px;
    position: relative;
    margin-top: 5px;
    margin-left: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    h1{
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
    p{ 
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
    }
`
export const ParaContainer=styled.p`
        height: 250px;
`
export const DateContainer=styled.div`
        display: flex;
    div{
        display: flex;
        gap: 10px;
        margin-left: auto;
    }
    img{ 
        background-color: black;
        height: 20px;
        padding: 10px;
        width: 20px;
        border-radius: 50%;
        cursor: pointer;
    }
`;