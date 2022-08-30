const Note = (props) => {
    return (<div className="note">
        <h1> {props.title} </h1>
        <p> {props.content} </p>
        <button onClick={ ()=> props.onDelete(props.id)}><i className="fa-solid fa-trash-can" ></i> </button>
    </div>);
}

export default Note;