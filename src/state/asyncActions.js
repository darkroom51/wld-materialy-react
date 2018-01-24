// example data----------------------------
export const exampleData = {
    name: {
        first: 'waldek',
        last: 'butt'
    }
}
//------------------------------------------

const SET_DATA = 'asyncActions/SET_DATA'

export const setData = data => ({
    type: SET_DATA,
    data: data
})

const initialState = {
    randomUserData : null
}

export default (state = initialState, action) => {
switch (action.type){
    case SET_DATA:
        return {
            ...state,
            randomUserData: action.data
        }
    default:
        return state
}
}