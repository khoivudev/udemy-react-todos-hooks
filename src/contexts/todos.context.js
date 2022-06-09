import React, {createContext, useReducer } from 'react';
import todosReducer from '../reducers/todos.reducer';

const initialTodos = [
  {id: 1, task:"Pet a Monkey", completed: false}, 
  {id: 2, task:"Wash Car", completed: false}, 
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
  const [todos, dispatch] = useReducer(todosReducer, initialTodos)

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value ={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}