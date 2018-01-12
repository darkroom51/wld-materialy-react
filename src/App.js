import React, {Component} from 'react'

class App extends Component {
    // initial state of component
    state = {
        counter: 1
    }

    componentDidMount(){
        this.setState({
            counter: this.state.counter + 1
        }, () => console.log('Stan się zupdatował!'))
    }

    render() {
        console.log('Render!', this.state)
        return (
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

export default App
