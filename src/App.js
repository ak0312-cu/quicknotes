import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("quicknotes")) || [];
    const now = new Date();
    const filtered = storedNotes.filter(note => {
      if (!note.completed || !note.completedAt) return true;
      const completedDate = new Date(note.completedAt);
      return (now - completedDate) < 2 * 24 * 60 * 60 * 1000;
    });
    setNotes(filtered);
  }, []);

  useEffect(() => {
    localStorage.setItem("quicknotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([...notes, note]);

  const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));

  const markCompleted = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, completed: true, completedAt: new Date().toISOString() } : note
    ));
  };

  const trimmedSearch = search.trim().toLowerCase();

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(trimmedSearch) ||
    note.tags.some(tag => tag.toLowerCase().includes(trimmedSearch))
  );


  const ongoing = filteredNotes.filter(note => !note.completed);
  const completed = filteredNotes.filter(note => note.completed);

  return (
    <div className="container">
      <div className="header-row">
        <div className="title">
          <img src="/QuickyNotes.jpg" alt="icon" className="logo" />
          <div>
            <h1 className="main-title">Quicky Notes</h1>
            <p className="subtitle">Your smart, simple note-taking companion 📝</p>
          </div>
        </div>

        <div className="search-bar-container">
          <SearchBar setSearch={setSearch} />
        </div>
      </div>

      <NoteForm addNote={addNote} />
      <div className="columns">
        <div>
          <h2>Ongoing Tasks</h2>
          <NoteList notes={ongoing} deleteNote={deleteNote} markCompleted={markCompleted} />
        </div>
        <div>
          <h2>Completed Tasks</h2>
          <NoteList notes={completed} deleteNote={deleteNote} completed />
          <p className="info-text">Completed tasks are removed permanently after 2 days</p>
        </div>
      </div>
      <footer>From Due to Done — Where Tasks Meet Triumph.</footer>
      <footer>©Made by AK</footer>
    </div>
    
  );
}

export default App;
