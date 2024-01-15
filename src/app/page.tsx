import Image from 'next/image'
import styles from './page.module.css';
import Header from './components/header/Header';
import NotesComponent from './components/Notes/NotesComponent';
import React from 'react'

const Home = () => {
  return (
    <div>
       <Header/>
   <NotesComponent/>
    </div>
  )
}

export default Home