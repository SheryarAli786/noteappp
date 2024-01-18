'use client'
import Header from './components/header/Header';
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
   date: string;
   item:string;
   id:number;
 }

const Home = () => {
   const [data, setData] = useState([]);
 
   useEffect(() => {
     const storedData = window.localStorage.getItem("myNotes");
     setData(storedData ? JSON.parse(storedData) : []);
   }, []);
 
   const [showModal, setShowModal] = useState(false);
 
   const refresher = () => {
     const storedData = window.localStorage.getItem("myNotes");
     setData(storedData ? JSON.parse(storedData) : []);
   };
   const handleDataUpdate = () => {
     refresher();
   };
return(
   <div>  
   <Header
    setShowModal={setShowModal}
    refresher={refresher}
    showModel={showModal}
    onDataUpdate={handleDataUpdate} 
   />
   <div className="page-container1">
        {
          data.map((item: NoteItem) => (
            <NotesComponent refresher={refresher} item={item} />
          ))
        }
      </div>
   </div>
)}
export default Home;