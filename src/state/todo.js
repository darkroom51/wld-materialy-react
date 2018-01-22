const ADD_TASK = 'todo/ADD_TASK'

let nextTaskId = 0

const addTask = name =>(
    {
        type: ADD_TASK,
        name, // name:name
        key: nextTaskId++
    })

const initialState = {
    tasks : []
}

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK: // stan bierze nowy task i merdzuje go na siebie w nowym obiekcie;
            return {...state, tasks: state.tasks.concat([{name:action.name}])}
        default:
            return state
    }
}