const SET_DATA = 'asyncActions/SET_DATA'

//kreateor akcji wrzuca dane
export const setData = data => ({
    type: SET_DATA,
    data: data
})

// Async ACTION i.e. data fetch ---> data=dispatch(setData()) vs data = setData()
//funkcja zwracajaca funkcje ---> const fun=()=>()=>{}
export const fetchData = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api')
        .then (response => response.json())
        .then (data => dispatch(setData(data.results[0])))
}

const initialState = {
    randomUserData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                randomUserData: action.data
            }
        default:
            return state
    }
}