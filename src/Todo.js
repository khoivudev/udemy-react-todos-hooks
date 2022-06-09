import React, {useContext, memo} from 'react'
import {ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import {DispatchContext} from './contexts/todos.context';

function Todo({id, task, completed}) {
  const [isDirty, toggleIsDirty] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  const handleDelete = () => dispatch({type: "REMOVE", id});
  const handleCheck = () => dispatch({type:"TOGGLE", id});
  const toggleEdit = () => toggleIsDirty(!isDirty);
  
  return (
    <ListItem style={{height: '64px'}}>
      {isDirty ?(
      <>
        <EditTodoForm id={id} task={task} toggleEditForm={toggleIsDirty}/>
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

export default memo(Todo)