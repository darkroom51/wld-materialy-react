const CHANGE_TEXT = 'changeText/CHANGE_TEXT'


export const changeTextAction = newText => ({  //ACTION CREATOR ---> tworzy obiekt akcji ACTION
    type: CHANGE_TEXT,
    newText //newText:newText
})




const initialState = {
    text: ''
}




export default (state = initialState, action) => {  //REDUCER, zwraca nowy stan na podstawie akcji
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.newText
            }
        default:
            return state
    }
}