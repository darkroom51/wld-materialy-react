//To wszystko to jest kaczka/DUCK reduxowy
// ACTION TYPE
const TOGGLE_RECT = 'rectangle/TOGGLE_RECT' //nazwaKaczki/NAZWA_AKCJI

// action creator - export by name ---> action createor zwraca AKCJE czyli OBJECT
export const toggleRect = () => ({
    type: TOGGLE_RECT // w akcji nie musimy niesc dodatkowaych danych, bo mamy tylko jeden rect i tylko przelaczamy isRectVisible: true/false
})

// initial state
const initialState = {
    isRectVisible: true
}

// reducer - export default ---> nie musimy nazywac funkcji bo to exp def
export default (state = initialState, action) => { // state to wycinek globalenego reduxowego statem ktory jest laczony w storze
    switch (action.type) {
        case TOGGLE_RECT:
            return {
                ...state,
                isRectVisible: !state.isRectVisible
            }
        default:
            return state
    }
}