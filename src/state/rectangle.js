const TOGGLE_RECT = 'rectangle/TOGGLE_RECT'


export const toggleStateAction = rectVisible => ({  //ACTION CREATOR ---> tworzy obiekt akcji ACTION
    type: TOGGLE_RECT,
    rectVisible
})




const initialState = {
    rectVisible: true
}




export default (state = initialState, action) => {  //REDUCER, zwraca nowy stan na podstawie akcji
    switch (action.type) {
        case TOGGLE_RECT:
            return {
                ...state,
                rectVisible: !action.rectVisible
            }
        default:
            return state
    }
}