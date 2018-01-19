import React from 'react'
import {database} from './firebase'

import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const paperStyles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

const Task = (props) => (
    <ListItem
        primaryText={props.taskName}  //wld_INFO !!!!!!!!!!!
        //rightIcon={<ActionDelete onClick={props.deleteTask}/>} //OK- to nie jest wywolanie tylko deklaracja!! onClick wywola funkcje.
        //rightIcon={<ActionDelete onClick={()=>props.deleteTask('0')}/>} //NOT - funkcja wywola sie od razu
        //rightIcon={<ActionDelete onClick={()=>props.deleteTask(props.taskId)}/>} //OK - funkcja z parametrem, czyli wywolana musi byc wlozona w fukcje zewnetrzna, bo onClick wywola zewnetrzna, wiec wtedy dopiero wywola sie wewnetrzna
        rightIcon={<ActionDelete onClick={()=>props.deleteTask(props.taskId)}/>}
    />
)

class FireBaseToDo extends React.Component {
    state = {
        tasks: null,
        textFromInput: '',
    }

    componentWillMount() {
        database.ref('/firebaseToDo')
            .on('value', (snapshot) => {
                const arrTasks = Object.entries( // wld_INFO - przenosimy key z [key,value] do wewnatrz obiektu value!!!!!!
                    snapshot.val() || {}).map(([key,value])=>{value.key = key; /*tworzy obj.key i podstawia key*/ return value})
                this.setState({tasks: arrTasks}) // snapshot.val() || {} ----> wazne: abu uniknac bledu w przypadku pustej listy z bazy danych
            }
        )
    }

    deleteTask = (taskId) => {
        database.ref('/firebaseToDo/'+taskId)
            .remove()
    }

    // handleTextFromInput = (e, val) => {
    //     this.setState({textFromInput: e.target.value})
    // }

    handleAddTask = () => {
        if (!this.state.textFromInput){
            alert('empty input');
            return
        }

        database.ref('/firebaseToDo')
            .push({name: this.state.textFromInput}) // wyslij obiekt o key=name i value=textFromInput
        this.setState({textFromInput : ''})
    }

    render() {
        return (
            <Paper style={paperStyles}>
                <TextField
                    hintText={"Do something nice..."}
                    fullWidth={true}
                    //underlineFocusStyle={{borderColor: lime500}}
                    value={this.state.textFromInput}
                    onChange={(e,value)=> this.setState({textFromInput: value})} // onChange={this.handleTextFromInput}
                />
                <RaisedButton
                    label={"add"}
                    primary={true}
                    fullWidth={true}
                    onClick={this.handleAddTask}
                />

                <List style={{textAlign:'left'}}>
                    {
                        this.state.tasks // uniknij null za pierwszym zaladowaniem, zanim dane przyjda z bazy
                        &&
                        this.state.tasks.map((el) => (
                            <Task
                            taskName = {el.name}
                            taskId = {el.key}
                            deleteTask = {this.deleteTask}
                            key = {el.key} //unique key
                            />
                        ))
                    }
                </List>
            </Paper>
        )
    }
}

export default FireBaseToDo