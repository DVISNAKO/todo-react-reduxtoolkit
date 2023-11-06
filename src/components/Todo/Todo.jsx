import React from 'react';
import './Todo.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/todoSlice';

const Todo = ({ id, name, description }) => {
    const dispatch = useDispatch();


    return (
        <div className='todo'>
            <div className='content'>
                <div className='name'>Name: {name}</div>
                <div>Description: {description}</div>
            </div>
            <div className='btns'>
                <input className='done' type='checkbox' />
                <div className='delete' onClick={() => dispatch(deleteTask(id))}>Delete</div>
            </div>
        </div>
    );
};

export default Todo;