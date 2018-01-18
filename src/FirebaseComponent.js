import React from 'react'
import {database} from './firebase'  //import z naszego pliku config
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FirebaseComponent extends React.Component {

    // componentWillMount() {
    //     // const listDbRef = database.ref('/JFDDL3/restToDo/waldek/list')
    //     //  listDbRef.set({name:'waldek'}) //to samo co PUT ale zwraza promisy
    //     //  .then(()=> console.log('Saved to DB'))
    //
    //     // const listDbRef = database.ref('/my/first/path')
    //     // listDbRef.set("it Works") //to samo co PUT ale zwraza promisy
    //     //     .then(()=> console.log('Saved to DB'))
    //
    //     const listDbRef = database.ref('/myData')
    //     listDbRef.set({name: "waldek", surname: "fryc", age: 18}) //to samo co PUT ale zwraza promisy i nie trzeba JSONstringify()
    //         .then(() => console.log('Saved to DB'))
    // }

    state = {
        textFromField: '',
        controlMessage: ''
    }

    handleTextField = (e) => {
        this.setState({textFromField: e.target.value})
    }

    setButtonHandler = () => {
        database.ref('/testTextField').set(this.state.textFromField)
             .then(()=> {
            this.setState({controlMessage: `Set to DB OK, you sent:  ${this.state.textFromField}`});
            this.setState({textFromField:''});
        })
    }

    render() {
        return (
            <div>
                <h1>Firebase</h1>
                <div>
                    {this.state.controlMessage}
                </div>
                <div>
                    <TextField
                        hintText="Place your code here"
                        floatingLabelText="JSON to send"
                        multiLine={true}
                        rows={2}
                        fullWidth={true}
                        value={this.state.textFromField}
                        onChange={this.handleTextField}
                    />
                </div>
                <div>
                    <RaisedButton
                        label=".set()"
                        fullWidth={true}
                        primary={true}
                        onClick={this.setButtonHandler} // mozemy bez funcji zewnetrznej ()=> bo nie musimy robic wywolania fukcji, bo nie przezkazujemy zadnego argumantu do funkcji
                    />
                </div>
            </div>
        )
    }
}

export default FirebaseComponent