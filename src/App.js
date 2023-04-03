import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import { useState, useEffect } from 'react';
import Note from './components/Note';
import axios from 'axios';

function App() {
   


  const [notes, setNotes] = useState([]);
  useEffect(()=>{
    axios.get('https://notes-keeper-three.vercel.app/notes')
    .then(res => setNotes(res.data))
    .catch(err => console.log('Error: '+err))
  }, [notes])

    
  function handleNote(note){
    console.log(note)
    axios.post('https://notes-keeper-three.vercel.app/notes/add', {
      description: note
    })
      .then(console.log("notes saved successfully..."))
      .catch(err => {
        console.log("error: "+err);
      })
      // console.log(axios.get('http://localhost:5000/notes'))
    setNotes((prevNotes) => [...prevNotes, note]);
  }
  function deleteNotes(id){
    axios.delete(`https://notes-keeper-three.vercel.app/notes/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log("Error: "+err));

  }
  return (
    <div className="bg-black overflow-x-hidden h-full p-10 w-full absolute">
      <Header />
      <InputForm onAdd={handleNote}/>
      <div className="flex flex-col mt-20 items-center">
      {notes.map((note) => (
        <Note note={note.description} date={note.createdAt?.split('T')[0] || ''} index={note._id} deleteNote={deleteNotes}/>
      ))}
      </div>
    </div>
  );
}

export default App;
