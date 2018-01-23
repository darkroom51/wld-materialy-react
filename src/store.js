import {createStore, combineReducers} from 'redux'
import todoReducer from './state/todo'
import changeTextReducrer from './state/changeText'

const reducer = combineReducers({
    todo: todoReducer,
    //koteczek: changeTextReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //including chrome dev tools
)

export default store