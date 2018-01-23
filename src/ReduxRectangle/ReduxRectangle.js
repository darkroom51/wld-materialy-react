import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {toggleStateAction} from '../state/rectangle'

class ReduxRectangle extends React.Component{
    state={
        isRectVisible:true
    }

    render (){
        return (
            <div>
                <div
                    style={{
                        width:200,
                        height:200,
                        backgroundColor:'red'
                    }}>
                </div>

                <RaisedButton
                    onClick={() => this.props.handleButtonClick(this.state.isRectVisible)}
                    label={"TOGGLE"}
                    primary={true}
                    fullWidth={true}
                />
            </div>
        )
    }

}

const mapStateToProps = state => ({  //DISPATCHER all below; ten laczy kawalski stanu
   //nazwaPropsa: kawalek.stanu.ktory.przypinamy
})

const mapDispatchToProps = dispatch => ({ //ten laczy akcje
    handleButtonClick: (toggleState) => dispatch(toggleStateAction(toggleState))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)