import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete'
import {lime500} from 'material-ui/styles/colors'

import {connect} from 'react-redux'
import {addTask, deleteTask} from './state/todo'


const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

const Task = (props) => (
    <ListItem
        primaryText={props.taskName}
        rightIcon={
            <ActionDelete
                onClick={() => props.deleteTask(props.taskId)} // to zostaje wywolane: deleteTask: key => dispatch(deleteTask(key))
            />
        }
    />
)

class ReduxToDo extends React.Component {
    state = {
        newTaskName: ''
    }

    render() {
        return (
            <Paper style={styles}>
                <TextField
                    value={this.state.newTaskName}
                    onChange={(e, value)=> this.setState({newTaskName: value})}
                    hintText={"Nowe zadanie"}
                    fullWidth={true}
                    underlineFocusStyle={{borderColor: lime500}}
                />
                <RaisedButton
                    onClick={() => this.props.addTask(this.state.newTaskName)}
                    label={"Dodaj!"}
                    primary={true}
                    fullWidth={true}
                />
                <List style={{textAlign: 'left'}}>
                    {
                        this.props.tasks
                        &&
                        this.props.tasks.map((task) => ( //propsy zamiast stanu
                            <Task
                                key={task.key}
                                taskName={task.name}
                                taskId={task.key}
                                deleteTask={this.props.deleteTask}
                            />
                        ))
                    }
                </List>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({  //DISPATCHER all below; ten laczy kawalski stanu
    tasks: state.todo.tasks
})

const mapDispatchToProps = dispatch => ({ //ten laczy akcje
    addTask: name => dispatch(addTask(name)),
    deleteTask: key => dispatch(deleteTask(key))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxToDo)