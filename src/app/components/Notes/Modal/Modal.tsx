import React, { useEffect, useState } from 'react';
import { ButtonsContainer, ColorContainer, ColorDateContainer, HeadingContainer, InputSectionContainer, MainContainer, NameContainer, DateContainer, Buttons, Label } from './ModalStyle'
import { ModelOverlay } from '../NotesStyle';
import { NoteItems } from '@/app/components/Notes/types';
import { ModelProps } from '@/app/components/Notes/types';

const Modal:React.FC<ModelProps>=({closeModel, handleDataUpdate, mode, selectedNote })=> {
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
      if (!title || !content || !date) {
        return alert("Title, Content and Date are required");
      } 

      const savedData: NoteItems[] = JSON.parse(localStorage.getItem("myNotes") || '[]');
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
        const newData: NoteItems = {
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
      handleDataUpdate();
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
  <ModelOverlay>
    <MainContainer>
        <HeadingContainer>
        {mode === 'add' ? 'Add Note' : 'Edit Note'}
        </HeadingContainer>
        <InputSectionContainer>
      <NameContainer>
        <Label>Name</Label>
        <input type='text' placeholder='Enter name'  
         value={title}
            onChange={handleTitle}></input>
        <Label className='disc'>Description</Label>
        <textarea placeholder='Add more details'     
         value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}></textarea>
      </NameContainer>
      <ColorDateContainer>
        <ColorContainer>
        <div>
       <Label>Background Color</Label>
        <input type="color" value={background}
            onChange={handleBackground} />
       </div>
       <div>
          <Label>Font color</Label>
        <input type="color" value={fontColor}
            onChange={handlefontColor} />
       </div>
      </ColorContainer>
      <DateContainer>
      <Label>Date</Label>
      <input type="date" value={date} onChange={handleDate}/>
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
    </ModelOverlay>
  )}
export default Modal
