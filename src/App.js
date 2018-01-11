import React, {Component} from 'react';
import MyFirstComponent from './MyFirstComponent'

class App extends Component {
    render() {
        return (
            <div>
                <MyFirstComponent/>
                <MyFirstComponent/>
                <MyFirstComponent/>
            </div>
        );
    }
}

export default App;
