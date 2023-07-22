import React, { useState,useEffect} from 'react'
import NotesList from './Components/NotesList'
import { nanoid } from 'nanoid'
import Search from './Components/Search';
import Header from './Components/Header';


export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "15/04/21"
    },
    {
      id: nanoid(),
      text: "this is my fourth note!",
      date: "15/04/21"
    },
    {
      id: nanoid(),
      text: "this is my second note!",
      date: "15/04/21"
    },
    {
      id: nanoid(),
      text: "this is my third note!",
      date: "15/04/21"
    }
  ]);

  const [searchText, setsearchText] = useState('');

  const [darkMode, setdarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes=JSON.parse(
      localStorage.getItem('react-notes-app-data')
      );
      if(savedNotes) setNotes(savedNotes);
  },[]);


  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  }, [notes]);
  

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setdarkMode} />
        <Search handleSearchNote={setsearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  ) 
}
