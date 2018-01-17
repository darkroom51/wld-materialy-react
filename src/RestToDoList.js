import React from 'react'

const databaseUrl = 'https://ad-snadbox.firebaseio.com/JFDDL3/restToDo/waldek/';

class RestToDoList extends React.Component {
    state = {
        list: null,
        newTaskName: ''
    }

    getData (){
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDb => this.setState({list: dataFromDb})) //nowy obiekt state ktory zostanie polaczony ze starym state

    }

    componentWillMount() {
        this.getData()
    }

    handlerInputChange = (e) => this.setState({newTaskName: e.target.value})

    handlerButtonClick = () => {
        const newTaskObj = {name: this.state.newTaskName}

        fetch(
            databaseUrl + 'list/.json',
            {
                method: 'POST',
                body: JSON.stringify(newTaskObj),
                //headers:{} w FIREBASE nie musza byc
            }
        )
            .then(()=> {console.log('POST OK'); this.getData()}) // pobieramy dane ale w .then, bo musimy miec pewnosc, ze POST juz zakonczyl sie wykonywac
            .catch((err)=> console.log('POST ERR'))

    }


    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        onChange={this.handlerInputChange}
                        value={this.state.newTaskName}
                    />
                    <button
                        onClick={this.handlerButtonClick}
                    >
                        Post
                    </button>
                </div>
                {
                    Object.entries(this.state.list || {})
                        .map(([key, val]) => (    // key jest lepszy jako uid, niz index tablicy, index lepszy niz nic
                            <div key={key}>{val.name}</div>
                        ))
                }
            </div> /*musimy przerobic obiek na tablice, bo React nie moze przyjmowac obiektow jako children*/
        )
    }
}

export default RestToDoList