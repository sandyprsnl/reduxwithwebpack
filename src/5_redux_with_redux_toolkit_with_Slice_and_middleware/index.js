const { ADD_TASK } = require("./reducers");
const { store } = require("./store");

store.dispatch(ADD_TASK({task:"task 1 added in with slice and middleware"}));

console.log(store.getState())