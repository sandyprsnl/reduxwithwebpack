import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

var id = 0;
const taskSlice = createSlice({
    name:'task',
    initialState:{
        tasks:[],
        loading:false,
        error:null
    },
    reducers:{
        ADD_TASK:(state,action)=>{
            state.push(                {
                id: ++id,
                task: action.payload.task,
                isComplete: false
            });
        },
        ADD_TASKS:(state,action)=>{
            state.loading = false;
             state.tasks= action.payload.tasks;
        },
        SET_ERROR:(state,action)=>{
            state.error = action.payload.error
        },
        SET_LOADING:(state,action)=>{
            state.loading = true;
        },
        UPDATE_TASK:(state,action)=>{
            const index = state.findIndex((task)=>task.id==action.payload.id);
            state[index].task = action.payload.task
        },
        REMOVE_TASK:(state,action)=>{
            const index = state.findIndex((task)=>task.id==action.payload.id);
            state.splice(index,1);
        }
    },
});

export const {SET_LOADING,SET_ERROR,ADD_TASKS,ADD_TASK,UPDATE_TASK,REMOVE_TASK}= taskSlice.actions;
export const  taskReducer = taskSlice.reducer;