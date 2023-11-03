import React from 'react';
import './List.css';
import Todo from '../Todo/Todo';

const List = () => {
    return (
        <div className='main'>
            <div className='todo__list'>
                <h2>Todo List</h2>
                <Todo/>
            </div>
            <div className='btn__block'>
                <h2>Add new todo</h2>
                <input type='text'
                placeholder='Enter name'
                />
                <input type='text'
                placeholder='Enter Description'
                />
                <button>Create todo</button>
            </div>
            
        </div>
    );
};

export default List;