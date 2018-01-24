import {createStore, combineReducers} from 'redux'
import todoReducer from './state/todo'
import changeTextReducer from './state/changeText'
import rectangleReducer from './state/rectangle'

const reducer = combineReducers({
    todo: todoReducer,
    koteczek: changeTextReducer,
    rectangle: rectangleReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //including chrome dev tools
)

export default store