import {auth} from '../firebase'
const SET_USER = 'auth/SET_USER'

export const setUser = (user) => ({
    type: SET_USER,
    userData: user
})

export const initAuth = () => (dispatch, getState) => {
    auth.onAuthStateChanged((user)=>{
        // if not logged use is null
        dispatch(setUser(user))
    })
}

export const logIn = (email,password) => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(()=> console.log('Logged in'))
        .then(()=> alert('Something Wrong'))
}

//signUp()  auth.crateUserAndPassword

const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.userData
            }
        default:
            return state
    }
}