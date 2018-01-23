import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

class ReduxRectangle extends React.Component{
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
                    label={"Toggle"}
                />
            </div>
        )
    }

}

const mapStateToProps = state => ({  //DISPATCHER all below; ten laczy kawalski stanu
   //nazwaPropsa: kawalek.stanu.ktory.przypinamy
})

const mapDispatchToProps = dispatch => ({ //ten laczy akcje
    // nazwaPropsa: funkcja.ktora.wywoladispatch()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)