import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
   {id: uuidv4(), name: 'task1', description: 'mytask1'},
   {id: uuidv4(), name: 'task2', description: 'mytask2'},
]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({ ...action.payload, id: uuidv4()});
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            return state.filter(task => task.id !== taskId);
        }
    },
})

export const {addTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;