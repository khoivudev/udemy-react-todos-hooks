import React, {createContext } from 'react';
import todosReducer from '../reducers/todos.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const initialTodos = [
  {id: 1, task:"Pet a Monkey", completed: false}, 
  {id: 2, task:"Wash Car", completed: false}, 
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
  const [todos, dispatch] = useLocalStorageReducer("todos", initialTodos, todosReducer )

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value ={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}