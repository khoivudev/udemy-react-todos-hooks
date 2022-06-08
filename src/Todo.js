import React from 'react'
import {ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo(
{
  id, 
  task, 
  completed, 
  removeTodo, 
  editTodo, 
  toggleTodo,
}) {
  const [isDirty, toggleIsDirty] = useToggleState(false);

  const handleDelete = () => {
    removeTodo(id);
  }
  const handleCheck = () => {
    toggleTodo(id);
  }

  const toggleEdit = () => {
    toggleIsDirty(!isDirty);
  }
  
  return (
    <ListItem style={{height: '64px'}}>
      {isDirty ?(
      <>
        <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEditForm={toggleIsDirty}/>
      </>
      ) : (
      <>
      <Checkbox tabIndex={-1} checked={completed} onChange={handleCheck}/>
      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete' onClick={handleDelete}>
          <DeleteIcon/>
        </IconButton>
        <IconButton aria-label='Edit' onClick={toggleEdit}>
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
      </>)}
    </ListItem>
  );
}

export default Todo