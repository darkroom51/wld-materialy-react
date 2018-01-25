import React from 'react'

import {connect} from 'react-redux'

const Auth = (props) => (
    props.userData ?
        props.children
        :
        <div>Nie Zalogoway</div>
)


const mapStateToProps = state => ({
    userData: state.auth.user
})
const mapDispatchToProps = state => ({})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)