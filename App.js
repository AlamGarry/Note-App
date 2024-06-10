import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const CurrentPageWidget = ({
  currentPage,
  setCurrentPage,
  noteList,
  addNote,
  deleteNote,
  findNote,
  selectedNote,
  editNote,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          findNote={findNote}
        />
      );
    case 'edit':
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          selectedNote={selectedNote}
          editNote={editNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    default:
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          findNote={findNote}
        />
      );
  }
};

export default function App() {
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note Pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);
  const [currentPage, setCurrentPage] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = ({ title, desc }) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    const note = {
      id,
      title,
      desc,
    };

    setNoteList([...noteList, note]);
  };

  const findNote = (noteId) => {
    const note = noteList.find((note) => note.id === noteId);
    setSelectedNote(note);
    setCurrentPage('edit');
  };

  const editNote = (noteId, updateNote) => {
    const updatedNote = noteList.map((note) => {
      if (note.id === noteId) {
        return {
          id: note.id,
          title: updateNote.title,
          desc: updateNote.desc,
        };
      }

      return note;
    });

    setNoteList(updatedNote);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = noteList.filter((note) => note.id !== noteId);
    setNoteList(updatedNotes);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      findNote={findNote}
      selectedNote={selectedNote}
    />
  );
}
