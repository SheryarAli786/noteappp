import React, { useState } from 'react'
import { ButtonsContainer, ColorContainer, ColorDateContainer, HeadingContainer, InputSectionContainer, MainContainer, NameContainer} from './ModalStyle'
import { DateContainer } from '../Notes/NotesComponentStyle';
interface ModelProps{
    closeModel:()=>void;
}
interface Note {
    id: number;
    title: string;
    content: string;
    background: string;
    date: string;
  }
const Modal:React.FC<ModelProps>=({closeModel})=> {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [background, setBackground] = useState("#ffffff");
    const [date, setDate] = useState("");
   


    const handleAdd = () => {

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
      };
return(
    <MainContainer>
        <HeadingContainer>
            <h1>
                Add Note
            </h1>
        </HeadingContainer>
        <InputSectionContainer>
      <NameContainer>
        <label>Name</label>
        <input type='text' placeholder='Enter name'  
         value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}></input>
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
            onChange={(e) => {
              setBackground(e.target.value);
            }} />
        </ColorContainer>
        <DateContainer>
        <label >Date</label>
        <input type="date" value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}/>
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
