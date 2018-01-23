const ADD_TASK = 'todo/ADD_TASK'
const DELETE_TASK = 'todo/DELETE_TASK' // nazwa akcji reducera - akcja ktora nalezy do reducera todo/, tez zapis to tylko konwencja

let nextTaskId = 0

export const addTask = name => ({  //ACTION
    type: ADD_TASK,
    name, //name:name
    key: nextTaskId++
})

export const deleteTask = key => ({  //ACTION
    type: DELETE_TASK,
    key // key:key
})





const initialState = {
    tasks: []
}




export default (state = initialState, action) => {  //REDUCER
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat([
                    {
                        name: action.name,
                        key: action.key
                    }
                ])
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.key !== action.key)
            }
        default:
            return state
    }
}