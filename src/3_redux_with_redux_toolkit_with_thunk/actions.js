import { createAction } from "@reduxjs/toolkit"



export const addTask = createAction("ADD_TASK") ;
export const updateTask = createAction("UPDATE_TASK") ;
export const removeTask = createAction("REMOVE_TASK") ;


export const fetcAPi = ()=>{
    return async (dispatch,action)=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const  body = await response.json();
        console.log(body);
        dispatch({type:'FETCH_DATA_FROM_API',payload:{tasks:body}})
    }
}


