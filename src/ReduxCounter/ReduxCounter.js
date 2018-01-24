import React from 'react'

import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {incCounter} from "../state/reduxCounter"; // importujemy akcje
import {decCounter} from "../state/reduxCounter";
import {resetCounter} from "../state/reduxCounter";

class ReduxCounter extends React.Component {

    render() {
        console.log(this.props.counterValue);
        return (

            <div>
                <h1 style={{textAlign:'center'}}>{this.props.counterValue}</h1>
                <RaisedButton
                    label={"+"}
                    fullWidth={true}
                    onClick={this.props.handleButtonClickInc}
                />
                <RaisedButton
                    label={"-"}
                    fullWidth={true}
                    onClick={this.props.handleButtonClickDec}
                />
                <RaisedButton
                    label={"0"}
                    fullWidth={true}
                    onClick={this.props.handleButtonClickReset}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //nazwa propsa: kawałek.stanu.który.przypinamy
    counterValue: state.reduxCounter.counterValue
})

const mapDispatchToProps = dispatch => ({
    //nazwa propsa: funkcja.która.wywoła.dispatch (z akcją)
    handleButtonClickInc: () => dispatch(incCounter()),
    handleButtonClickDec: () => dispatch(decCounter()),
    handleButtonClickReset: () => dispatch(resetCounter()),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCounter)