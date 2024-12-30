export const addTask=(task)=>{
return {
    type:"ADD_TASK",
    payload:{
        task:task
    }
}
}

export const updateTask=(id,task)=>{
    return {
        type:"UPDATE_TASK",
        payload:{
            id:id,
            task:task
        }
    }
}
export const updateTaskMarkAsComplete=(id)=>{
    return {
        type:"UPDATE_TASK_MARK_AS_COMPLETE",
        payload:{
            id:id,
        }
    }
}
export const deleteTask=(id)=>{
    return {
        type:"DELETE_TASK",
        payload:{
            id:id,
        }
    }
}

export const AddTaskFromAPI=()=>{
 return async ( dispatch,getState)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const body = await response.json();
    console.log(body);
    dispatch(addTask(body.title));
 }
} 
