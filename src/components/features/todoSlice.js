import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {id: 1, name: 'task1', description: 'mytask1'},
   {id: 2, name: 'task2', description: 'mytask2'},
]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload); 
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        }
        
    },
})

export const {addTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;