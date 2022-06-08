import React from 'react'
import {Paper, List, Divider} from '@material-ui/core';
import Todo from './Todo';

function TodoList({todos, removeTodo, editTodo, toggleTodo}) {
  if(todos && todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <div key={todo.id} >
            <Todo 
              {...todo}
              removeTodo={removeTodo} 
              editTodo={editTodo}
              toggleTodo={toggleTodo}
              />
            {i < todos.length - 1 && <Divider/>  }
          </div>
        ))}
      </List>
    </Paper>
  )
  return null;
}

export default TodoList