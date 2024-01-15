import React, { useState } from 'react'
import { InsideContainer1, InsideContainer2, InsideContainer2div1, InsideContainer2div2, InsideContainer2div3, MainContainer, MainContainerInside, MainContainerInside1 } from './ModalStyle'
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
        <MainContainerInside1>
            <h1>
                Add Note
            </h1>
        </MainContainerInside1>
        <MainContainerInside>
      <InsideContainer1>
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
      </InsideContainer1>
      <InsideContainer2>
        <InsideContainer2div1>
       <label >Select Color</label>
        <input type="color" value={background}
            onChange={(e) => {
              setBackground(e.target.value);
            }} />
        </InsideContainer2div1>
        <InsideContainer2div2>
        <label >Date</label>
        <input type="date" value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}/>
        </InsideContainer2div2>
        <InsideContainer2div3>
            <button onClick={closeModel}>
                Back
            </button>
            <button className='button2' onClick={handleAdd}>
                Save
            </button>
        </InsideContainer2div3>
      </InsideContainer2>
      </MainContainerInside>
    </MainContainer>
  )}
export default Modal
