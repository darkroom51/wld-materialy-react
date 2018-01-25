import React from 'react'

import {connect} from 'react-redux'

import LogIn from './LogIn'
import SignUp from './SignUp'
import {logIn} from '../state/auth'

class Auth extends React.Component {
    state ={
        loginEmail: '',
        loginPassword: '',
        signUpEmail:'',
        signUpPassword:'',
        signUpRetypePassword:''
    }

    handleInput = (nameInState, event, value) => {
        const newState = {} // bardzo madra rzecz; obsuluga wielu inputow obj['key']=value
        newState[nameInState] = value
        this.setState(newState)
    }

    render() {
        return (
            this.props.userData ?
                this.props.children
                :
                <div>
                    <LogIn
                        onEmailChange={(e,v)=> (this.handleInput ('loginEmail', e, v))}
                        onPasswordChange={(e,v)=> (this.handleInput ('loginPassword', e, v))}
                        onLogInClick={this.props.onLogInClick(this.state.loginEmail,this.state.loginPassword)}
                        onLogInByGoogleClick={()=>{}}
                    />
                    <SignUp
                        onEmailChange={(e,v)=> (this.handleInput ('signUpEmail', e, v))}
                        onPasswordChange={(e,v)=> (this.handleInput ('signUpPassword', e, v))}
                        onRetypePasswordChange={(e,v)=> (this.handleInput ('signUpRetypePassword', e, v))}
                        onSignUpClick={()=>{}}
                    />
                </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.auth.user
})
const mapDispatchToProps = dispatch => ({
    onLogInClick: (email,password) => dispatch(logIn(email,password))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)