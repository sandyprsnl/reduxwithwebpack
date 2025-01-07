var id = 0;
export const Reducers = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    isComplete: false
                }
            ];

        case "UPDATE_TASK":
            return state.map(task => task.id == action.payload.id ? { ...task, task: action.payload.task } : task);

        case "DELETE_TASK":
            return state.filter(task=>task.id!=action.payload.id??task );
        case "UPDATE_TASK_MARK_AS_COMPLETE":
            return state.map(task => task.id == action.payload.id ? { ...task, isComplete: true } : task);

        default:
            return [];
    }
}