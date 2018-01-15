import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'

class App extends Component {
    state = {
        isDrawerOpen: false,
        menuItems: ['First drawer item', 'Second drawer item', 'Third drawer item']
    }

    drawerToggle = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render() {
        console.log('Render App!', this.state)
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="My First App"
                        onLeftIconButtonClick={this.drawerToggle}
                    />
                    <Drawer
                        docked={false}
                        width={250}
                        open={this.state.isDrawerOpen}
                        onRequestChange={this.drawerToggle}
                    >
                        {/*SOMETHIN FROM DB FOR EXAMPLE*/}
                        {
                            this.state.menuItems
                                .map((textOnMenu, index) => (
                                    <MenuItem key={index}>
                                        {textOnMenu}
                                    </MenuItem>
                                ))
                        }
                    </Drawer>

                    <Counter />

                    <DefaultPropsComponent/>
                    <DefaultPropsComponent name="Mateusz"/>
                    <DefaultPropsComponent name="Ola"/>
                    <DefaultPropsComponent name="Ala"/>
                    <DefaultPropsComponent/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
