import { Context } from '../Todo';
import { useContext } from 'react';
import './TodoFooter.module.css';

function TodoFooter(){

    const context = useContext(Context);

    const lengthOfComleted = context.todos.filter((todo)=> todo.isCompleted).length;

    return(
        <div className='contentFooter'>
            <span style={{textAlign: 'center', color:'#333'}}>{lengthOfComleted}/{context.todos.length} completed</span>

        </div>
    )
}

export default TodoFooter;