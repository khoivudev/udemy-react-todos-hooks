import React from 'react'
import useInputState from './hooks/useInputState'
import {TextField} from '@material-ui/core';

function EditTodoForm({id, task, editTodo, toggleEditForm}) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();
    }}
      style={{marginLeft: '1rem', width:"50%"}}
    >
      <TextField margin="normal" value={value} onChange={handleChange} fullWidth={true} autoFocus={true}/> 
    </form> 
  )
}

export default EditTodoForm