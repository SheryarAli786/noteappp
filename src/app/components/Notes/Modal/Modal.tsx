import React, { useState } from 'react'
import { ButtonsContainer, ColorContainer, ColorDateContainer, HeadingContainer, InputSectionContainer, MainContainer, NameContainer, DateContainer } from './ModalStyle'
interface ModelProps{
    closeModel:()=>void;
    refresher:()=>void;
    onDataUpdate:()=>void
}
interface Note {
    id: number;
    title: string;
    content: string;
    background: string;
    date: string;
  }
const Modal:React.FC<ModelProps>=({closeModel, refresher, onDataUpdate})=> {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [background, setBackground] = useState("#ffffff");
    // const [fontColor, setfontColor] = useState("#ffffff");
    const [date, setDate] = useState("");
    const handleAdd = () => {
      if (!title || !content) {
        return alert("Title and Content is required");
      }
    const savedData: Note [] = JSON.parse(localStorage.getItem("myNotes") || '[]');
            let newData: Note = {
              id: Date.now(),
              title,
              content,
              background,
              date,
            };
            savedData.push(newData);
            localStorage.setItem("myNotes", JSON.stringify(savedData));
            setTitle("");
            setContent("");
            setDate("");
           closeModel();
           refresher();
           onDataUpdate(); 
      };
      const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };
      const handleBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBackground(e.target.value);
      };
      const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
      };
return(
    <MainContainer>
        <HeadingContainer>
                Add Note
        </HeadingContainer>
        <InputSectionContainer>
      <NameContainer>
        <label>Name</label>
        <input type='text' placeholder='Enter name'  
         value={title}
            onChange={handleTitle}></input>
        <label>Description</label>
        <textarea placeholder='Add more details'     
         value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}></textarea>
      </NameContainer>
      <ColorDateContainer>
        <ColorContainer>
       <label >Select Color</label>
        <input type="color" value={background}
            onChange={handleBackground} />
        </ColorContainer>
        <DateContainer>
        <label>Date</label>
        <input type="date" value={date}
            onChange={handleDate}/>
        </DateContainer>
        <ButtonsContainer>
            <button onClick={closeModel}>
                Back
            </button>
            <button className='button2' onClick={handleAdd}>
                Save
            </button>
        </ButtonsContainer>
      </ColorDateContainer>
      </InputSectionContainer>
    </MainContainer>
  )}
export default Modal
