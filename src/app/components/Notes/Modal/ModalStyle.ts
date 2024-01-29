import styled from "styled-components";

interface StyledComponentProps {
    isBackground?: boolean;
    isColor?: boolean;
}

export const MainContainer=styled.div`
    top: 150px;
    padding: 0px 25px 30px 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    background-color: white;
`
export const Label=styled.label`
    font-weight:600;
    font-size: 14px;
`
export const NameContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .disc{
        padding-top: 20px;
    }

    input{
        border-radius: 3px;
        border: 2px solid #d6dadf;
        outline: none;
        padding: 2px;
        &:focus{
            border:  2px solid skyblue;
        }
        &::placeholder{
            font-size: 12px;
            font-family: 'roboto',sans-serif;
        }
    }
    textarea{
        padding-top: 5px;
        height: 200px;
        border-radius: 5px;
        border: 2px solid #d6dadf;
        outline: none;
        &:focus{
            border:  2px solid skyblue;
        }
        &::placeholder{
            font-size: 12px;
            font-family: 'roboto',sans-serif;
        }
    }
`
export const ColorDateContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    `
export const ColorContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
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
    width: max-content;
  
    input{
    border-radius: 5px;
    padding: 5px;
    border: 2px solid #d6dadf;
    outline: none;
    width: 158px;
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