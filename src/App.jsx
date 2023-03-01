import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/createArea";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (indexToRemove) => {
    setNotes((prev) => prev.filter((item, index) => indexToRemove !== index));
  };

  const clearAll = () => setNotes([]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} notes={notes} onClear={clearAll} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;