import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import todoReducer from './state/todo'
import changeTextReducer from './state/changeText'
import rectangleReducer from './state/rectangle' //import default wiec nazwa dowolna
import reduxCounterReducer from './state/reduxCounter' //import default wiec nazwa dowolna
import asyncActionsReducer from './state/asyncActions' //import default wiec nazwa dowolna
import loadingIndicatorReducer from './state/loadingIndicator' //import default wiec nazwa dowolna

const reducer = combineReducers({
    todo: todoReducer,
    koteczek: changeTextReducer,
    rectangle: rectangleReducer,   //kaczka/duck ---> importuj default reducer i podstaw pod nowa dowolna nazwe, aby uniknac konfliktow
    buttCounter: reduxCounterReducer,
    asyncActions: asyncActionsReducer,
    loading: loadingIndicatorReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)) // Redux laczy stora thunka i compose przez applyMidddleware
)

export default store