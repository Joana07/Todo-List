import React, { useState } from 'react'
import './App.css'
import Create from './components/Create'
import ToDo from './components/ToDo'

function App() {
  const [toDo, setToDo] = useState([]);

  return (
    <div>
      <h1>To-Do List</h1>
      <Create toDo={toDo} setToDo={setToDo} />
      <ToDo toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
