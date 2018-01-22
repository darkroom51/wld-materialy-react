import React from 'react'


import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import {connect} from 'react-redux'
import {addTask} from './state/todo'

const paperStyles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

const Task = (props) => (
    <ListItem
        primaryText={props.taskName}
        rightIcon={<ActionDelete onClick={()=>props.deleteTask(props.taskId)}/>}
    />
)




class ReduxToDo extends React.Component {
    state = {
        textFromInput: '',
    }




    render() {
        return (
            <Paper style={paperStyles}>
                <TextField
                    hintText={"Do something nice..."}
                    fullWidth={true}
                    value={this.state.textFromInput}
                    onChange={(e,value)=> this.setState({textFromInput: value})}
                />
                <RaisedButton
                    label={"add"}
                    primary={true}
                    fullWidth={true}
                    onClick={() => this.props.handleAddTask(this.state.newTaskName)}
                />

                <List style={{textAlign:'left'}}>
                    {
                        this.props.tasks //stan jest przekazany przez propsy
                        &&
                        this.props.tasks.map((el) => (
                            <Task
                                taskName = {el.name}
                                taskId = {el.key}
                                deleteTask = {this.props.deleteTask}
                                key = {el.key}
                            />
                        ))
                    }
                </List>
            </Paper>
        )
    }
}

const mapStateToProps = state =>({
    tasks: state.todo.tasks
})

const mapDispatchToProps = state => ({
    //addTask : (event, value) => dispatch(addTask(value))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ReduxToDo)
