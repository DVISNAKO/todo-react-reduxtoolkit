import React, { useState } from 'react';
import './Todo.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/todoSlice';

const Todo = ({ id, name, description }) => {
    const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <div className='todo'>
            <div className='content'>
                <div className={`name ${isChecked ? 'checked' : ''}`}>Name: {name}</div>
                <div className={`description ${isChecked ? 'checked' : ''}`}>Description: {description}</div>
            </div>
            <div className='btns'>
                Done <input className='done' type='checkbox'
                onChange={handleCheckboxChange}/>
                <div className='delete' onClick={() => dispatch(deleteTask(id))}>Delete</div>
            </div>
        </div>
    );
};

export default Todo;