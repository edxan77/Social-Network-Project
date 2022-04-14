import Form from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import { useReducer, useEffect, createContext } from 'react';
import style from  './Todo.module.css';


const list = [
  {
    id: Math.random(),
    text: 'Learn React hooks',
    isCompleted:false,
  },
  {
    id: Math.random(),
    text: 'Learn React router',
    isCompleted:false,
  },
  {
    id: Math.random(),
    text: 'Learn React custom hooks',
    isCompleted:false,
  }
];

const Context = createContext(null);

function reducer(state, action){

  if(action.type === 'add'){
    return [
      ...state,
      {
        id:Math.random(),
        text: action.payload.value,
        isCompleted:false,
      }
    ]
  }
  else if(action.type === 'delete'){

      return state.filter((item)=> action.payload.id !== item.id)
  }
  else if(action.type === 'change'){

      return state.map((todo)=> {
          if(action.payload.id === todo.id){
            return action.payload.newTodo;
          }
          return todo;
        })
  }
 
}


function TodoApp(){

  const [todos, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todoItems')) || list);


  useEffect(()=>{
    localStorage.setItem('todoItems', JSON.stringify(todos))
  },[todos])
  

  function onAdd(value){


    dispatch({type: 'add', payload: {value:value}})
  }

  function onDelete(todo){

    dispatch({type:'delete', payload:{id:todo.id}})
  }

  function onChange(newTodo){

    dispatch({type:'change', payload: {newTodo: newTodo,id: newTodo.id}})
  }

  return (
    <div className={style.app}>
        
      <div className={style.container}>
        <div className={style.todoBox}>
          <span className={style.heading}>
            <h3 className={style.text}>To-Do List</h3>
          </span>
          <Context.Provider value={{todos:todos, onAdd: onAdd, onChange:onChange, onDelete:onDelete}}>
            <Form  />
            <TodoList />
            <TodoFooter />
          </Context.Provider>  
        </div>
    
      </div>
    
   
    </div>     
          
        )  
}

export default TodoApp;
export {Context};
