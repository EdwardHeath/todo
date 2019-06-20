import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ list }) {

  return (
    <div>
      {list.map((item, index) => (
        <TodoListItem name={item} completed={false} key={index} />
      ))}
    </div>
  );
}

export default TodoList;
