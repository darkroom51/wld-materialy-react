import React, {Component} from 'react';
import MyFirstComponent from './MyFirstComponent'

class App extends Component {
    render() {
        return (
            <div>
                <MyFirstComponent name="Mateusz"/> {/*// component call*/}
                <MyFirstComponent name="Wojtek"/>
                <MyFirstComponent name="Natalia"/>
            </div>
        );
    }
}

export default App;
