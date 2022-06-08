import React, {createContext} from 'react';
import useTodoState from '../hooks/useTodoState';

const initialTodos = [
  {id: 1, task:"Pet a Monkey", completed: false}, 
  {id: 2, task:"Wash Car", completed: false}, 
];

export const TodosContext = createContext();

export function TodosProvider(props){
  const todosStuff = useTodoState(initialTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}