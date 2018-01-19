import React from 'react'
import LogIn from "./LogIn";
import {auth} from "./firebase"

class FireBaseLogIn extends React.Component {

    state = {
        emailText : '',
        passwordText : '',
        isLoggedIn : false,
    }

    componentWillMount() {
        auth.onAuthStateChanged((user)=>{
            if (user){
                console.log('logged')
            }
        })
    }

    onEmailChange = (e,value) => {this.setState({emailText: value})}

    onPasswordChange = (e,value) => {this.setState({passwordText: value})}

    onLogInClick = () => {

    }

    onLogInByGoogleClick = () => {

    }


    render () {
        console.log(auth.currentUser)

        return (
            this.state.isLoggedIn ?
                <div>Hello Logged User</div>
                :
            <LogIn
                onEmailChange = {this.onEmailChange}
                onPasswordChange = {this.onPasswordChange}
                onLogInClick = {this.onLogInClick}
                onLogInByGoogleClick = {this.onLogInByGoogleClick}
            />
        )
    }
}

export default FireBaseLogIn