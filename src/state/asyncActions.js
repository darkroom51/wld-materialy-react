import {startLoading, stopLoading} from './loadingIndicator'

const SET_DATA = 'asyncActions/SET_DATA'
const FETCHING_STARTED = 'asyncActions/FETCHING_STARTED'
const FETCHING_FINISHED = 'asyncActions/FETCHING_FINISHED'
const FETCHING_FAILED = 'asyncActions/FETCHING_FAILED'

//kreator akcji wrzuca dane
export const setData = data => ({
    type: SET_DATA,
    data: data
})

const fetchingStarted = () => ({type: FETCHING_STARTED})
const fetchingFinished = () => ({type: FETCHING_FINISHED})
const fetchingFailed = () => ({type: FETCHING_FAILED})

// Async ACTION i.e. data fetch ---> data=dispatch(setData()) vs data = setData()
//funkcja zwracajaca funkcje ---> const fun=()=>()=>{}
export const fetchData = () => (dispatch, getState) => {
    dispatch(startLoading())
    dispatch(fetchingStarted()) // pierwsza akcja

    setTimeout(()=>
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                dispatch(setData(data.results[0]))
                dispatch(fetchingFinished())
                dispatch(stopLoading())
            })
            .catch(err => {
                dispatch(fetchingFailed())
                dispatch(stopLoading())
            })
        , 1000)

}

const initialState = {
    randomUserData: null,
    messageForUser: ''
}

const messages = {
    started: 'Ladowanie...',
    failed: 'Blad pobierania danych!'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                randomUserData: action.data
            }
        case FETCHING_STARTED:
            return {
                ...state,
                messageForUser: messages.started
            }
        case FETCHING_FINISHED:
            return {
                ...state,
                messageForUser: initialState.messageForUser // messageForUser: ''
            }
        case FETCHING_FAILED:
            return {
                ...state,
                messageForUser: messages.failed
            }
        default:
            return state
    }
}