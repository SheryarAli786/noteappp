'use client'
import Header from './components/header/Header';
import { AddIcon } from './components/header/HeaderStyle';
import Modal from './components/Notes/Modal/Modal';
import NotesComponent from './components/Notes/Notes';
import { useEffect, useState } from 'react';

declare global {
  
   interface Window {
     localStorage: Storage;
   }
 }

 interface NoteItem {
   title: string;
   content: string;
   background: string;
   fontColor:string;
   date: string;
   item:string;
   id:number;
   isStarred: boolean;
 }

const Home: React.FC<NoteItem> = ()=> {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('');
   const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);
   const [filterType, setFilterType] = useState('All');

   useEffect(() => {
     const storedData = window.localStorage.getItem("myNotes");
     setData(storedData ? JSON.parse(storedData) : []);
   }, []);
 
   const [showModel, setShowModel] = useState(false);
 
   const refresher = () => {
     const storedData = window.localStorage.getItem("myNotes");
     setData(storedData ? JSON.parse(storedData) : []);
   };

   const openAddModel = () => {
    setMode('add');
    setSelectedNote(null);
    setShowModel(true);
  };

  const openEditModel = (note: NoteItem) => {
    setMode('edit');
    setSelectedNote(note);
    setShowModel(true);
  };

  const closeModel=()=>{
    setShowModel(false)
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
  };
  
   const handleDataUpdate = () => {
     refresher();
   };

return(
   <div>  
   <Header
    onFilterChange={handleFilterChange} 
    openModel={openAddModel}
   />
     <div className="page-container1">
     <AddIcon src='images/icons8-add-48.png' alt= 'Add Icon' onClick={openAddModel}/>
        {data
          .filter((item: NoteItem) => (filterType === 'All' ? true : item.isStarred))
          .map((item: NoteItem) => (
            <NotesComponent
              key={item.id}
              refresher={refresher}
              openModel={() => openEditModel(item)}
              item={item}
            />
          ))}
      </div>
      {showModel &&(
        <Modal closeModel={closeModel} 
         refresher={refresher}   
         onDataUpdate={handleDataUpdate}
         mode={mode}
         selectedNote={selectedNote}
         />
      )}
   </div>
)}
export default Home;