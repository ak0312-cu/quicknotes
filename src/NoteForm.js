import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;

    const note = {
      id: Date.now(),
      title,
      tags: tags.split(",").map(tag => tag.trim()),
      dueDate,
      completed: false,
      completedAt: null
    };
    addNote(note);
    setTitle("");
    setTags("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tags/Description"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
