import React, { useEffect, useState } from 'react'
import { ButtonsContainer, ColorContainer, ColorDateContainer, HeadingContainer, InputSectionContainer, MainContainer, NameContainer, DateContainer, Buttons } from './ModalStyle'
interface ModelProps{
    closeModel:()=>void;
    refresher:()=>void;
    onDataUpdate:()=>void;
    mode: string;
    selectedNote: NoteItem | null;
}
interface NoteItem {
    id: number;
    title: string;
    content: string;
    background: string;
    fontColor:string;
    date: string;
  }

const Modal:React.FC<ModelProps>=({closeModel, refresher, onDataUpdate, mode, selectedNote })=> {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [background, setBackground] = useState("#ffffff");
    const [fontColor, setfontColor] = useState("#ffffff");
    const [date, setDate] = useState("");
    useEffect(() => {
      if (selectedNote) {
        setTitle(selectedNote.title);
        setContent(selectedNote.content);
        setBackground(selectedNote.background);
        setfontColor(selectedNote.fontColor);
        setDate(selectedNote.date);
      }
    }, [selectedNote]);
    const handleAdd = () => {
      if (!title || !content) {
        return alert("Title and Content are required");
      }
      const savedData: NoteItem[] = JSON.parse(localStorage.getItem("myNotes") || '[]');
      if (mode === 'edit' && selectedNote) {
        const updatedData = savedData.map((note) =>
          note.id === selectedNote.id
            ? {
                ...note,
                title,
                content,
                background,
                fontColor,
                date,
              }
            : note
        );
        localStorage.setItem("myNotes", JSON.stringify(updatedData));
      } else {
        const newData: NoteItem = {
          id: Date.now(),
          title,
          content,
          background,
          fontColor,
          date,
        };
        savedData.push(newData);
        localStorage.setItem("myNotes", JSON.stringify(savedData));
      }
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
      const handlefontColor= (e: React.ChangeEvent<HTMLInputElement>) => {
        setfontColor(e.target.value);
      };
      const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
      };

return(
    <MainContainer>
        <HeadingContainer>
        {mode === 'add' ? 'Add Note' : 'Edit Note'}
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
        <div>
       <label >Background Color</label>
        <input type="color" value={background}
            onChange={handleBackground} />
       </div>
       <div>
            <label >Font color</label>
        <input type="color" value={fontColor}
            onChange={handlefontColor} />
       </div>
        </ColorContainer>
        <DateContainer>
        <label>Date</label>
        <input type="date" value={date}
            onChange={handleDate}/>
        </DateContainer>
        <ButtonsContainer >
            <Buttons onClick={closeModel}>
                Back
            </Buttons>
            <Buttons isBackground={true} isColor={true}  onClick={handleAdd}>
                Save
            </Buttons>
        </ButtonsContainer>
      </ColorDateContainer>
      </InputSectionContainer>
    </MainContainer>
  )}
export default Modal
