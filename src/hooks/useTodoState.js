import {v4 as uuidv4} from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default function useTodoState(initialTodos){
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos); 

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
    },
    removeTodo: todoId => {
      const updateTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updateTodos);
    },
    editTodo: (id, value)=>{
      const updateTodos = todos.map(todo=> todo.id === id ? {...todo, task: value} : todo );
      setTodos(updateTodos);
    },
    toggleTodo: (todoId)=>{
      const updateTodos = todos.map(todo=> todo.id === todoId ? {...todo, completed: !todo.completed} : todo );
      setTodos(updateTodos);
    }
  }
}