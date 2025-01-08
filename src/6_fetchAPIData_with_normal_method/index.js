const { ADD_TASK, ADD_TASKS } = require("./todoSlice");
const { store } = require("./store");

const loadApiData = async ()=>{
    const response = await fetch('https://dummyjson.com/todos');
    const body = await response.json();
    console.log(body.todos);
    store.dispatch(ADD_TASKS({tasks:body.todos}));
}
loadApiData();
setTimeout(()=>console.log(store.getState()),1000);
