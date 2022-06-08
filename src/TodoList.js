import React, {useContext} from 'react'
import {Paper, List, Divider} from '@material-ui/core';
import Todo from './Todo';
import {TodosContext} from './contexts/todos.context';

function TodoList() {
  const {todos } = useContext(TodosContext);
  if(todos && todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <div key={todo.id} >
            <Todo {...todo}/>
            {i < todos.length - 1 && <Divider/>  }
          </div>
        ))}
      </List>
    </Paper>
  )
  return null;
}

export default TodoList