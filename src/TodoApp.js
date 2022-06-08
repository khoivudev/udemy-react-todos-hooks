import React, {useEffect } from 'react'
import { Typography, Toolbar, Paper, AppBar, Grid } from '@material-ui/core'
import useTodoState from './hooks/useTodoState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoApp() {
  const initialTodos = [
    {id: 1, task:"Pet a Monkey", completed: false}, 
    {id: 2, task:"Wash Car", completed: false}, 
  ];
  
  const {todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState(initialTodos);

  useEffect(()=>{
    console.log(todos);
  })

  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa"
    }}
    elevation={0}
    >
        <AppBar color='primary' position='static' style={{height:"64px"}}>
          <Toolbar>
            <Typography color='inherit'>TODO WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} toggleTodo={toggleTodo}/>
          </Grid>
        </Grid>
    </Paper>
  )
}

export default TodoApp