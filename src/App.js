import React, {Component} from 'react';
import MyFirstComponent from './MyFirstComponent'

class App extends Component {
    render() {
        return (
            <div>
                <MyFirstComponent name="Mateusz" showName={false}/> {/*// component call*/}
                <MyFirstComponent name="Wojtek" showName={true}/>
                <MyFirstComponent name="Natalia" showName={true}/>
                <MyFirstComponent name="Tomek" showName={false}/>
            </div>
        );
    }
}

export default App;
