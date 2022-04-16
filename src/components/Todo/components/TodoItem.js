import { Context } from '../Todo';
import { useContext } from 'react';
import style from  './TodoItems.module.css';

function TodoItems({todo}){

    const context = useContext(Context);

    return(
        <div className={style.item}>
            <div className={style.box}>
                <div>
                    <input  type='checkbox' checked={todo.isCompleted} onChange={(e)=> context.onChange({...todo, isCompleted:e.target.checked})}/>
                    <span className={todo.isCompleted ? style.strike : ''}>{todo.text}</span>
                </div>
                <button className={style.btnDelete}   onClick={()=>context.onDelete(todo)}>x</button>
            </div>
        </div>
    )
}

export default TodoItems;