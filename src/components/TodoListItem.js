import React from 'react';

function TodoListItem({ name, completed }) {
  const doTodo = () => {
    completed = true
  }
  return completed ? null : <div onClick={doTodo} className="TodoListItem">{name}</div>;
}

export default TodoListItem;
