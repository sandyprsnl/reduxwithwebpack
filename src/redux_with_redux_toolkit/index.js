const { addTask, updateTask, removeTask, } = require("./actions");
const { store } = require("./store");

store.dispatch(addTask({task:"task 1 with redux toolkit"}));

console.log(store.getState());

store.dispatch(addTask({task:"task 2 with redux toolkit"}));

console.log(store.getState());

store.dispatch(removeTask({id:1}));

console.log(store.getState());