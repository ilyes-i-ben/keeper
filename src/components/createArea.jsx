import React, { useState } from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const updateNewNote = (e) => {
        const { value, name } = e.target;
        setNewNote(prev => ({
            ...prev,
            [name]: value
        }
        ))
    }

    const [inText, setInText] = useState(false);

    return (
        <div className="createArea">
            <form>
                {inText && <input autoFocus name="title" placeholder="Title Here" onChange={updateNewNote} value={newNote.title} />}
                <textarea name="content" placeholder="Take a note..." onClick={() => { setInText(true) }} onChange={updateNewNote} rows={inText ? 3 : 1} value={newNote.content} />
                {inText && <button onClick={(e) => {
                    e.preventDefault();
                    props.onAdd(newNote);
                    setNewNote({
                        title: "",
                        content: ""
                    })
                }}><i className="fa-solid fa-plus" ></i> </button>}
            </form>
            {props.notes.length !== 0 && <button className="clearAll" onClick={props.onClear}> <i className="fa-solid fa-trash-can" ></i> All </button>}
        </div>
    );
}

export default CreateArea;