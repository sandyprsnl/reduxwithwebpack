const { addTask, updateTask, removeTask, fetcAPi, } = require("./actions");
const { store } = require("./store");

store.dispatch(addTask({task:"task 1 with redux toolkit"}));

console.log(store.getState());

store.dispatch(addTask({task:"task 2 with redux toolkit"}));

console.log(store.getState());


store.dispatch(fetcAPi());

setTimeout(()=>{
    console.log(store.getState());
},1000)
