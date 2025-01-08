import { createSlice } from "@reduxjs/toolkit";

var id = 0;


const taskSlice = createSlice({
    name:'task',
    initialState:[],
    reducers:{
        ADD_TASK:(state,action)=>{
            state.push(                {
                id: ++id,
                task: action.payload.task,
                isComplete: false
            });
        },
        ADD_TASKS:(state,action)=>{
            return action.payload.tasks;
        },
        UPDATE_TASK:(state,action)=>{
            const index = state.findIndex((task)=>task.id==action.payload.id);
            state[index].task = action.payload.task
        },
        REMOVE_TASK:(state,action)=>{
            const index = state.findIndex((task)=>task.id==action.payload.id);
            state.splice(index,1);
        }
    }
});

export const {ADD_TASKS,ADD_TASK,UPDATE_TASK,REMOVE_TASK}= taskSlice.actions;
export const  taskReducer = taskSlice.reducer;