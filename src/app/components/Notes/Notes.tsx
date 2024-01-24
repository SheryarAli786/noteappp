'use client'
import React, { useState } from 'react';
import { CloseIcon, Container, DateContainer, MainContainer, ModelContent, ModelOverlay, ParaContainer} from'./NotesStyle';
interface Noteprops {
  item: NoteItem;
  refresher:()=>void;
  openModel:()=>void;
}
interface NoteItem {
  title: string;
  content: string;
  background: string;
  fontColor:string;
  date: string;
  id:number;
  isStarred: boolean;
}
const NotesComponent: React.FC<Noteprops> = ({item, refresher, openModel}) => {
  const [showConModel, setShowConModel] = useState(false);

  const handleDelete = () => {
    setShowConModel(true);
  };

  const handleCancel = () => {
    setShowConModel(false);
  };

  const handleConfirm = () => {
    setShowConModel(false);
    const savedData = JSON.parse(localStorage.getItem('myNotes') ?? '[]') || [];
    if (savedData.length) {
      const newData = savedData.filter((data: any) => data.id !== item.id);
      localStorage.setItem('myNotes', JSON.stringify(newData));
      refresher();
    }
  };
  
  const toggleStar = () => {
  const updatedItem = { ...item, isStarred: !item.isStarred };
  const savedData = JSON.parse(localStorage.getItem('myNotes') ?? '[]') || [];
  const updatedData = savedData.map((data: any) =>
      data.id === updatedItem.id ? updatedItem : data
    );
    localStorage.setItem('myNotes', JSON.stringify(updatedData));
    refresher();
  };
  return (
    <Container>
        <MainContainer style={{ backgroundColor: item.background }}>
          <h1 style={{ color: item.fontColor }}>{item.title}</h1>
          <ParaContainer style={{ color: item.fontColor}}>
            {item.content}
          </ParaContainer>
          <DateContainer>
          <span style={{ color: item.fontColor}}>{item.date}</span>  
            <div>
                <img src="images/edit-icon3.png" alt="" onClick={openModel} />
                <img
              src={item.isStarred ? 'images/star-icon-filled.png' : 'images/star-icon2.png'}
              alt=""
              onClick={toggleStar}
            />
            </div>
          </DateContainer>
          <CloseIcon src="images/close-icon.png" alt="" onClick={handleDelete}/>
        </MainContainer>
        {showConModel && (
        <ModelOverlay>
          <ModelContent>
            <p>Are you sure you want to delete this note?</p>
            <div>
            <button onClick={handleCancel}>No</button>
            <button onClick={handleConfirm}>Yes</button>
            </div>
          </ModelContent>
        </ModelOverlay>
      )}
    </Container>
  );
};
export default NotesComponent;