import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {fetchData} from '../state/asyncActions'

class ReduxAsyncActions extends React.Component {
    render (){
        return (
            <div  style={{textAlign:'center'}}>
                <div style={{fontSize:30}}>
                    <img src={this.props.randomUserData ? this.props.randomUserData.picture.large : 'no image loaded'} alt={""}/>
                    <br />
                    {this.props.randomUserData ? this.props.randomUserData.name.first : 'name hasn\'t been fetched'}
                    <br />
                    {this.props.randomUserData ? this.props.randomUserData.name.last : 'last hasn\'t been fetched'}
                <br />
                    {this.props.randomUserData ? this.props.randomUserData.email : ''}
                    </div>
                <div  style={{color:'#ff0000', fontSize:20}}>
                    {this.props.loadingMessage}
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
    randomUserData: state.asyncActions.randomUserData,
    loadingMessage: state.asyncActions.messageForUser
})

const mapDispatchToProps = dispatch =>({
    //getRandomUserData: () => dispatch(setData(exampleData))   for flat data
    getRandomUserData: () => dispatch(fetchData())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxAsyncActions)




// // example data for flat data----------------------------
// export const exampleData = {
//     name: {
//         first: 'waldek',
//         last: 'butt'
//     }
// }
// //------------------------------------------
// const mapDispatchToProps = dispatch =>({
//     getRandomUserData: () => dispatch(setData(exampleData))
// })
// //------------------------------------------