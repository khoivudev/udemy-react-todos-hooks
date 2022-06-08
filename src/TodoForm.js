import React, {useContext} from 'react';
import {Paper, TextField} from '@material-ui/core';
import useInputState from './hooks/useInputState';
import {TodosContext} from './contexts/todos.context';

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  console.log("TODO FORM RENDER");
  return (
    <Paper style={{margin: "1rem", padding: "0 1rem"}}>
      <form 
        onSubmit={e=>{
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
      <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth={true}/>
      </form>
    </Paper>
  )
}

export default TodoForm