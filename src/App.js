import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'

function App() {
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState([])

  const addButtonClicked = (e) => {
    e.preventDefault()
    setList([...list, userInput])
    setUserInput('')
  }

  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Add a new Todo' value={userInput} onChange={(e) => setUserInput(e.target.value)} autoFocus />
        <button type='submit' onClick={addButtonClicked}>Add Todo</button>
      </form>
      <TodoList list={list} /> 
    </div>
  );
}

export default App;
