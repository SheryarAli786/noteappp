import styled from "styled-components";

interface StyledComponentProps {
    isBackground?: boolean;
    isColor?: boolean;
}

export const MainContainer=styled.div`
    position: absolute;
    top: 150px;
    right: 350px;
    z-index: 3;
    height: 450px;
    margin: auto;
    width: 600px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    background-color: white;
`
export const NameContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 10px;
    label{
        font-weight: 600;
        font-size: 14px;
        font-family: 'roboto',sans-serif;
    }
    input{
        margin-top: 5px;
        width: 200px;
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
        font-family: 'roboto',sans-serif;
        padding-top: 5px;
        width: 200px;
        height: 200px;
        border-radius: 5px;
        margin-top: 5px;
        border: 2px solid #d6dadf;
        outline: none;
        &:focus{
            border:  2px solid skyblue;
        }
       &::placeholder{
        padding-left: 5px;
       }
    }
`
export const ColorDateContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 10px;
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

label{
    padding-top: 5px;
    font-weight: 600;
    font-size: 14px;
    font-family: 'roboto',sans-serif;  
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
label{
    padding-top: 5px;
    font-weight: 600;
    font-size: 14px;
    font-family: 'roboto',sans-serif;  
}
 input{
    height: 25px;
    width: 150px;
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
    gap: 150px;
`
export const HeadingContainer=styled.h1`
    display: flex;
    justify-content: center;
    font-family: "roboto", sans-serif;
    font-size: 28px;
    font-weight: 700;
`