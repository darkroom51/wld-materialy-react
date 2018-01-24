import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'
import {changeTextAction} from '../state/changeText'


const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}


class ReduxSimpleText extends React.Component {
    state = { // wewnetrzny stan komponentu
        currentText: ''
    }

    render() {
        return (
            <div>
                <Paper style={styles}>
                    <h1>{this.props.displayedText}</h1>
                </Paper>
                <Paper style={styles}>
                    <TextField
                        value={this.state.currentText}
                        onChange={(e, value) => this.setState({currentText: value})}
                        hintText={"New text to change ..."}
                        fullWidth={true}
                    />
                    <RaisedButton
                        onClick={() => this.props.handleButtonClick(this.state.currentText)}
                        label={"CHANGE TEXT"}
                        primary={true}
                        fullWidth={true}
                    />
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({  //DISPATCHER all below; ten laczy kawalski stanu
    displayedText: state.koteczek.text  //state.reducer.text??
})

const mapDispatchToProps = dispatch => ({ //ten laczy akcje
    handleButtonClick: (newText) => dispatch(changeTextAction(newText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxSimpleText)
