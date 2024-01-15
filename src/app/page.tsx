import Image from 'next/image'
import styles from './page.module.css';
import Header from './components/header/Header';
import NotesComponent from './components/Notes/NotesComponent';
export default function Home() {
  return (
   <>
   <Header/>
   <NotesComponent/>
   </>
  )
}
