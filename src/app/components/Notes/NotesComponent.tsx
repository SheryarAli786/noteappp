'use client'
import React from 'react';
import { CloseIcon, Container, DateContainer, MainContainer, ParaContainer } from'./NotesComponentStyle';

interface NoteItem {
  title: string;
  content: string;
  background: string;
  date: string;
}

const NotesComponent: React.FC = () => {

  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;


  const savedData = isLocalStorageAvailable
    ? JSON.parse(localStorage.getItem('myNotes') ?? '[]') 
    : [];

  return (
    <Container>
      {savedData.map((item: NoteItem, i: number) => (
        <MainContainer key={i} style={{ backgroundColor: item.background }}>
          <h1>{item.title}</h1>
          <ParaContainer>
            <p>{item.content}</p>
          </ParaContainer>
          <DateContainer>
            <p>{item.date}</p>
            <div>
              <img src="images/edit-icon3.png" alt="" />
              <img src="images/star-icon2.png" alt="" />
            </div>
          </DateContainer>
          <CloseIcon src="images/close-icon.png" alt="" />
        </MainContainer>
      ))}
    </Container>
  );
};

export default NotesComponent;
