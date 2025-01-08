const { ADD_TASK, ADD_TASKS, fetchAPi } = require("./todoSlice");
const { store } = require("./store");

store.dispatch(fetchAPi());
setTimeout(()=>console.log(store.getState()),1000);
