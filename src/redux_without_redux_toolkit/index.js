const { addTask, updateTask, deleteTask, updateTaskMarkAsComplete, AddTaskFromAPI } = require("../redux_with_redux_toolkit/actions");
const { store } = require("../redux_with_redux_toolkit/store");

console.log('working');


store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type:"ADD_TASK",
    payload:{
        task:"task 1"
    }
})
// store.dispatch({
//     type:"ADD_TASK",
//     payload:{
//         task:"task 2"
//     }
// });

store.dispatch(addTask('Task 2'));

store.dispatch(updateTask(1,"Task 1 Updated"));

store.dispatch(deleteTask(1));

store.dispatch(updateTaskMarkAsComplete(2));

store.dispatch(AddTaskFromAPI());