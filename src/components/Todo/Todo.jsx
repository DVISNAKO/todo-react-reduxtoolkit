import React from 'react';
import './Todo.css';

const Todo = () => {
    return (
        <div className='todo'>
            <div className='content'>
                <div className='name'>Name:</div>
                <div>Description:</div>
            </div>
            <div className='btns'>
                <input 
                className='done'
                type='checkbox'/>
            <div className='delete'>Delete</div>
            </div>
            
        </div>
    );
};

export default Todo;