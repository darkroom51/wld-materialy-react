import React from 'react'
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
        primaryText={props.taskName}  //wld_INFO
        //rightIcon={<ActionDelete onClick={props.deleteTask}/>} //OK- to nie jest wywolanie tylko deklaracja!! onClick wywola funkcje.
        //rightIcon={<ActionDelete onClick={()=>props.deleteTask('0')}/>} //NOT - funkcja wywola sie od razu
        rightIcon={<ActionDelete onClick={()=>props.deleteTask(props.taskId)}/>} //OK - funkcja z parametrem, czyli wywolana musi byc wlozona w fukcje zewnetrzna, bo onClick wywola zewnetrzna, wiec wtedy dopiero wywola sie wewnetrzna
    />
)

class FireBaseToDo extends React.Component {
    deleteTask = () => {}

    render() {
        return (
            <Paper style={paperStyles}>
                <TextField
                    hintText={"Do something nice..."}
                    fullWidth={true}
                    //underlineFocusStyle={{borderColor: lime500}}
                />
                <RaisedButton
                    label={"add"}
                    primary={true}
                    fullWidth={true}
                />

                <List style={{textAlign:'left'}}>


                </List>
            </Paper>
        )
    }
}

export default FireBaseToDo