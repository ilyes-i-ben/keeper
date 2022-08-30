import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/createArea";
import "https://kit.fontawesome.com/c38faef509.js";
import './index.css';

function App(){
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) =>{
    setNotes(prev => [...prev, newNote])
  }

  const deleteNote = (indexToRemove) =>{
    setNotes(prev => prev.filter((item, index) => indexToRemove !== index));
  }

  return (
      <div>
        <Header/>
        <CreateArea
            onAdd = {addNote}
        />
        {notes.map((note, index) => <Note
                key ={index}
                id = {index}
                title ={note.title}
                content ={note.content}
                onDelete = {deleteNote}
            />
        )}
        <Footer/>
      </div>
  );
}

export default App;