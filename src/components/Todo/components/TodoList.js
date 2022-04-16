import { Context } from '../Todo';
import { useContext } from 'react';
import TodoItems from './TodoItem';

function TodoList(){

    const context = useContext(Context);

    return(
        <>
            {context.todos.map((todo)=>{
                return <TodoItems  key={todo.id} todo={todo} onDelete={context.onDelete} onChange={context.onChange}/>
            })}
        </>
    )
}

export default TodoList;