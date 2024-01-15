import styled from "styled-components";
export const MainContainer=styled.div`
position: absolute;
right: 300px;
z-index: 3;
    height: 420px;
    margin: auto;
    width: 600px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    background-color: white;
`
export const InsideContainer1=styled.div`
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
export const InsideContainer2=styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 10px;
    `
export const InsideContainer2div1=styled.div`
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
    width: 40px;
    border:0px;
        outline: none;
        &:focus{
            border:  2px solid skyblue;
        }
}
    
`
export const InsideContainer2div2=styled.div`
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
        &:focus{
            border:  2px solid skyblue;
        }
 }   
`
export const InsideContainer2div3=styled.div`
display: flex;
padding-top:40px;
gap: 12px;
button{
    font-size: 13px;
    border: 1px solid black;
    padding: 10px 20px;
    background-color: white;
    
    border-radius: 4px;
}
.button2{
    background-color: black;
    color: white;
}
`
export const MainContainerInside=styled.div`
    display: flex;
    gap: 150px;
`
export const MainContainerInside1=styled.div`
display: flex;
justify-content: center;
    h1{
       font-family: 'roboto',sans-serif;
    }
`