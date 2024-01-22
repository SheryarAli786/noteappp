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
}

const NotesComponent: React.FC<Noteprops> = ({item, refresher, openModel}) => {
  let savedData = JSON.parse(localStorage.getItem("myNotes") ?? '[]') || [];
  const [showConModel, setShowConModel] = useState(false);

  const handleDelete = () => {
    setShowConModel(true);
  };

  const handleCancel = () => {
    setShowConModel(false);
  };

  const handleConfirm = () => {
    setShowConModel(false);
    if (savedData.length) {
      let newData = savedData.filter((data: any) => data.id !== item.id);
      localStorage.setItem('myNotes', JSON.stringify(newData));
      refresher();
    }
  };
  
  return (
    <Container>
        <MainContainer style={{ backgroundColor: item.background }}>
          <h1 style={{ color: item.fontColor }}>{item.title}</h1>
          <ParaContainer style={{ color: item.fontColor}}>
            {item.content}
          </ParaContainer>
          <DateContainer>
            {item.date}
            <div>
                <img src="images/edit-icon3.png" alt="" onClick={openModel} />
              <img src="images/star-icon2.png" alt="" />
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