'use client'
import Header from './components/header/Header';
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
 }

const Home: React.FC<NoteItem> = ()=> {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('');
   const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);
 
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
  }
   const handleDataUpdate = () => {
     refresher();
   };

return(
   <div>  
   <Header
    openModel={openAddModel}
   />
     <div className="page-container1">
        {data.map((item: NoteItem) => (
          <NotesComponent
            key={item.id}
            refresher={refresher}
            openModel={() => openEditModel(item)}
            item={item}
          />
          ))
        }
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