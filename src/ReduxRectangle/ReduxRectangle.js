import React from 'react'

import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {toggleRect} from '../state/rectangle'

class ReduxRectangle extends React.Component {
    render() {
        return (

            <div>
                {
                    this.props.isRectVisible ?
                        <div
                            style={{
                                width: 200,
                                height: 200,
                                backgroundColor: 'red'
                            }}>
                        </div>
                        :
                        null
                }

                <RaisedButton
                    label={"Toggle"}
                    fullWidth={true}
                    onClick={this.props.handleButtonClick}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //nazwa propsa: kawałek.stanu.który.przypinamy
    isRectVisible: state.rectangle.isRectVisible
})

const mapDispatchToProps = dispatch => ({
    //nazwa propsa: funkcja.która.wywoła.dispatch (z akcją)
    handleButtonClick: () => dispatch(toggleRect())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)