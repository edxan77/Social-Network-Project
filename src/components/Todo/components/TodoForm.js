import { Context } from '../Todo';
import { useState, useContext } from 'react';
import style from './TodoForm.module.css';

function Form() {

  const [inputValue, setInputValue] = useState('');

  const context = useContext(Context);

  return (
    <div className={style.contentForm}>
        <form onSubmit={(e)=>{
          e.preventDefault();
          context.onAdd(inputValue);
          setInputValue('');
        }}>
          <input placeholder='add todo...' className={style.inputAdd} type='text' onChange={(e)=> setInputValue(e.target.value)} value={inputValue}/>
          <button className={style.btnAdd}>Add</button>
        </form>
    </div>
  );
}

export default Form;