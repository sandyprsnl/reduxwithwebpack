import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

var id = 0;

export const fetchAPi = createAsyncThunk('fetchToDo',async (a,thunkargs)=>{
    
    const {abort,dispatch,extra,fulfillWithValue, getState,rejectWithValue,requestId,signal}= thunkargs;
    try {
        const response = await fetch('https://dummyjson.com/todos');
        const body = await response.json();
        console.log(body.todos);
        // return {tasks:body.todos};
        return fulfillWithValue({tasks:body.todos});
    } catch (error) {
        return rejectWithValue({error:error.message});
    }
   
})

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
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAPi.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(fetchAPi.fulfilled,(state,action)=>{
             state.tasks=action.payload.tasks;
             state.loading = false
        })
        .addCase(fetchAPi.rejected,(state,action)=>{
            state.error=action.error.message;
            state.loading = false
        })
    }
});

export const {ADD_TASKS,ADD_TASK,UPDATE_TASK,REMOVE_TASK}= taskSlice.actions;
export const  taskReducer = taskSlice.reducer;