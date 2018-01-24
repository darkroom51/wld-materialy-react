// ACTION TYPE
const TOGGLE_RECT = 'rectangle/TOGGLE_RECT'

// action creator - export by name
export const toggleRect = () => ({
    type: TOGGLE_RECT
})

// initial state
const initialState = {
    isRectVisible: true
}

// reducer - export default
export default (state = initialState, action) => {
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