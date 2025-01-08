const { ADD_TASKS, SET_LOADING,SET_ERROR  } = require("./todoSlice");
const { store } = require("./store");


store.dispatch({
    type:'fetchAPI',
    APIURL:'https://dummyjson.com/todos',
    onSuccess:'task/ADD_TASKS',
    loading:'task/SET_LOADING',
    onError:'task/SET_ERROR'
})
setTimeout(()=>console.log(store.getState()),1000);
store.subscribe(()=>{
    console.log(store.getState());
})