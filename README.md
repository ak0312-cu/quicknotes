# 📝 QuickyNotes

A simple, efficient, quick and friendly browser-based note-taking web application built with React.js, designed to help users manage tasks with tagging, due dates, and completion tracking — all with a clean UI and offline support using LocalStorage.

## 🔗 Live Deployment
🌐 [QuickNotes Web App](https://quicknotes-vert.vercel.app/)

---

## 🚀 Features

- ✅ **Add, Search and Delete Notes**
- 🔍 **Search and Filter by Title or Tags**
- 🏷️ **Tagging Support for Categorizing Notes**
- 📅 **Set Due Dates via Calendar Picker**
- ⏳ **Mark Tasks as Completed**
- 📂 **Separate Ongoing and Completed Task Sections**
- ⚠️ **Overdue Task Highlighting**
- 🧹 **Auto-removal of Completed Tasks after 2 Days**
- 💾 **Data Persistence via LocalStorage**

---

## 🛠️ Tech Stack

- **Frontend**: React.js (with Hooks: useState and useEffect)
- **Styling**: CSS3
- **Data Storage**: Browser `localStorage`
- **Deployment**: Vercel

---

## 📁 Project Structure

```bash
quicknotes/
│
├── public/
│   └── QuickyNotes.jpg          # App icon/logo
│
├── src/
│   ├── components/
│   │   ├── NoteForm.js          # Form to add new notes
│   │   ├── NoteList.js          # Displays ongoing & completed notes
│   │   └── SearchBar.js         # Search/filter component
│   │
│   ├── App.js                   # Main component logic
│   ├── index.js                 # Entry point
│   └── styles.css               # App styling
│
├── package.json
└── README.md
