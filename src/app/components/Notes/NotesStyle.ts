import styled from "styled-components";

interface ParaContainerProps {
  scrollbarColor?: string;
}

export const CloseIcon = styled.img`
  width: 15px;
  height: 15px;
  background-color: black;
  padding: 3px;
  border-radius: 50px;
  position: absolute;
  top: -12px;
  right: -7px;
  opacity: 0;
  transition: opacity 0.3s ease; 
  cursor: pointer;
`;
export const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    padding: 5px 20px 20px 20px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    h1{
    font-size:25px;
    font-weight: 600;
    margin-bottom: 0px;
    font-family: 'Roboto', sans-serif;
    }
`

export const ParaContainer=styled.p<ParaContainerProps>`
    height: 250px;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    overflow: auto;
&::-webkit-scrollbar {
    width: 12px;              
  }

&::-webkit-scrollbar-track {
  background-color: lightgray;    
  border-radius :10px;
  }

&::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.scrollbarColor };    
  border-radius: 20px;      
  border: 2px solid  lightgray;  
 } 
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
    img:hover{
    background-color: brown;
    }
    span{
      padding-top: 8px;
    }
`;
export const ModelOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModelContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  div{
  display: flex;
  justify-content: center;
  gap: 5px;
  }
  button{
  font-size: 13px;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  background-color: black;
  cursor: pointer;
  &:active{
  background-color: white;
  color: black;
    }
  }
`;