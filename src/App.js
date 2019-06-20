import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'

function App() {
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState(['Sample Todo', 'Another Sample Todo', 'A Third Sample Todo'])

  const addButtonClicked = (e) => {
    e.preventDefault()
    if (userInput) {
      setList([...list, userInput])
      setUserInput('')
    }
  }

  return (
    <div className="App">
      <form className="NewTodoForm">
        <input type='text' placeholder='Add a new Todo' value={userInput} onChange={(e) => setUserInput(e.target.value)} autoFocus />
        <button type='submit' onClick={addButtonClicked}>Add Todo</button>
      </form>
      <TodoList list={list} /> 
    </div>
  );
}

export default App;
