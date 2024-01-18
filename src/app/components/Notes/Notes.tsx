'use client'
import React, { useState } from 'react';
import { CloseIcon, Container, DateContainer, MainContainer, ParaContainer } from'./NotesStyle';
interface Noteprops {
  item: NoteItem;
  refresher:()=>void;
}
interface NoteItem {
  title: string;
  content: string;
  background: string;
  date: string;
  id:number;
}

const NotesComponent: React.FC<Noteprops> = ({item, refresher}) => {
  let savedData = JSON.parse(localStorage.getItem("myNotes") ?? '[]') || [];
  const handleDelete = () => {
    const pass = window.confirm("Are you sure you want to delete this note ?");
    if (!pass) {
      return;
    }
    if (savedData.length) {
      let newData = savedData.filter((data:any) => data.id !== item.id);
      localStorage.setItem("myNotes", JSON.stringify(newData));
      refresher();
    }
  };
  
  return (
    <Container>
        <MainContainer style={{ backgroundColor: item.background }}>
          <h1>{item.title}</h1>
          <ParaContainer>
            {item.content}
          </ParaContainer>
          <DateContainer>
            {item.date}
            <div>
                <img src="images/edit-icon3.png" alt="" />
              <img src="images/star-icon2.png" alt="" />
            </div>
          </DateContainer>
          <CloseIcon src="images/close-icon.png" alt="" onClick={handleDelete}/>
        </MainContainer>
    </Container>
  );
};
export default NotesComponent;