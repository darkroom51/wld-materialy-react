import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {setData, exampleData} from '../state/asyncActions'

class ReduxAsyncActions extends React.Component {
    render (){
        return (
            <div  style={{textAlign:'center'}}>
                <div style={{fontSize:30}}>
                    {this.props.randomUserData ? this.props.randomUserData.name.first : 'name hasn\'t been fetched'}
                    <br />
                    {this.props.randomUserData ? this.props.randomUserData.name.last : 'last hasn\'t been fetched'}
                </div>
                <RaisedButton
                    label={"Fetch Data"}
                    onClick={this.props.getRandomUserData}
                />
            </div>
        )
    }
}

const mapStateToProps = state  =>({
    randomUserData: state.asyncActions.randomUserData
})

const mapDispatchToProps = dispatch =>({
    getRandomUserData: () => dispatch(setData(exampleData))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxAsyncActions)