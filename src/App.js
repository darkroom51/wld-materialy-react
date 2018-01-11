import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import MyFirstComponent from './MyFirstComponent'
import Home from './Home'
import Dashboard from './Dashboard'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Link to main!</Link><br />
                    <Link to="/home">Link to home!</Link><br />
                    <Link to="/dashboard">Link to dashboard!</Link><br />

                    <Route path="/" exact={true} render={
                        ()=>(<MyFirstComponent name="Mateusz" showName={true}/>)
                    }/>

                    <Route path="/home" component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </div>
            </Router>
        );
    }
}

export default App;
