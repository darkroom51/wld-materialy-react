import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import SideBar from './SideBar'
import LoadingIndicator from './LoadingIndicator'
import Auth from './Auth'

import routes from './routes'

import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
    state = {
        isDrawerOpen: false
    }

    drawerToggle = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render() {
        return (
            <Provider store={store}>
                <Auth>
                    <MuiThemeProvider>
                        <Router>
                            <div>
                                <LoadingIndicator/>
                                <AppBar
                                    title="My First App"
                                    onLeftIconButtonClick={this.drawerToggle}
                                />
                                <SideBar
                                    isDrawerOpen={this.state.isDrawerOpen}
                                    drawerToggle={this.drawerToggle}
                                />

                                {
                                    routes.map(route => (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            component={route.component}
                                        />
                                    ))
                                }
                            </div>
                        </Router>
                    </MuiThemeProvider>
                </Auth>
            </Provider>
        )
    }
}

export default App
