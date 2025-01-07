import { createReducer } from "@reduxjs/toolkit";

var id = 0;


export const Reducers = createReducer([],(reducerBuilder)=>{
    reducerBuilder.addCase('ADD_TASK',(state,action)=>{
        state.push(                {
            id: ++id,
            task: action.payload.task,
            isComplete: false
        });
    }).addCase('FETCH_DATA_FROM_API',(state,action)=>{

        return action.payload.tasks;
    })
    .addCase('UPDATE_TASK',(state,action)=>{
        const index = state.findIndex((task)=>task.id==action.payload.id);
        state[index].task = action.payload.task
    }).addCase('REMOVE_TASK',(state,action)=>{
        const index = state.findIndex((task)=>task.id==action.payload.id);
        state.splice(index,1);
    })
})