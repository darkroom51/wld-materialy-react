//To wszystko to jest kaczka/DUCK reduxowy
// ACTION TYPE
const INC = 'reduxCounter/INC' //nazwaKaczki/NAZWA_AKCJI
const DEC = 'reduxCounter/DEC'
const RESET = 'reduxCounter/RESET'

// action creator
export const incCounter = () => ({
    type: INC
})
export const decCounter = () => ({
    type: DEC
})
export const resetCounter = () => ({
    type: RESET
})

// initial state
const initialState = {
    counterValue: 0
}

// reducer - export default
export default (state = initialState, action) => { // state to wycinek globalenego reduxowego statem ktory jest laczony w storze
    switch (action.type) {
        case INC:
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case DEC:
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        case RESET:
            return {
                ...state,
                counterValue: 0
            }
        default:
            return state
    }
}