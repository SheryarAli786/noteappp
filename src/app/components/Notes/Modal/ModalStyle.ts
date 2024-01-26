import styled from "styled-components";

interface StyledComponentProps {
    isBackground?: boolean;
    isColor?: boolean;
}

export const MainContainer=styled.div`
    top: 150px;
    margin: auto;
    padding: 0px 25px 30px 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    background-color: white;
`
export const Label=styled.label`

`
export const NameContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight:600;
    font-size: 14px;

    input{
        padding: 5px;
        border-radius: 3px;
        margin-bottom: 20px;
        border: 2px solid #d6dadf;
        outline: none;
        &:focus{
            border:  2px solid skyblue;
        }
    }
    textarea{
       
        padding-top: 5px;
        padding-left: 10px;
        height: 200px;
        border-radius: 5px;
        margin-top: 5px;
        border: 2px solid #d6dadf;
        outline: none;
        &:focus{
            border:  2px solid skyblue;
        }
       &::placeholder{
        padding-left: 0px;
       }
    }
`
export const ColorDateContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 10px;
    font-weight:600;
    font-size: 14px;
    `
export const ColorContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
div{
    display: flex;
    flex-direction: column;
    gap: 7px;
}
input{
    width: 40px;
    outline: none;
    border: 2px solid #f0f0f0;
    cursor: pointer;
&:focus {
    border:  2px solid skyblue;
        }
}
`
export const DateContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  
 input{
    height: 25px;
    border-radius: 5px;
    border: 2px solid #d6dadf;
    outline: none;
    cursor: pointer;
    &:focus{
    border:  2px solid skyblue;
    }
 }   
`
export const ButtonsContainer=styled.div`
    display: flex;
    padding-top:30px;
    gap: 12px;
`
export const Buttons=styled.button<StyledComponentProps>`
    font-size: 13px;
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    color: ${(props) => (props. isColor ? 'white' : 'black')};
    background-color: ${(props) => (props. isBackground ? 'black' : 'white')};
`
export const InputSectionContainer=styled.div`
    display: flex;
    gap: 20px;
`
export const HeadingContainer=styled.h1`
    display: flex;
    justify-content: center;
    font-family: "roboto", sans-serif;
    font-size: 28px;
    font-weight: 700;
`