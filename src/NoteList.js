import React from "react";

function NoteList({ notes, deleteNote, markCompleted, completed = false }) {
  return (
    <div className="note-list">
      {notes.map(note => {
  const isOverdue = !note.completed && new Date(note.dueDate) < new Date();

  return (
    <div
      className={`note-item ${completed ? "completed-task" : "ongoing-task"}`}
      key={note.id}
    >

      <h3>{note.title}</h3>
      <p><strong>Tags/Description:</strong> {note.tags.join(", ")}</p>
      <p><strong>Due Date:</strong> {note.dueDate}</p>

      {isOverdue && <p className="overdue">Overdue</p>}

      {!completed && (
        <button onClick={() => markCompleted(note.id)}>Mark as Completed</button>
      )}
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
})}

    </div>
  );
}

export default NoteList;
