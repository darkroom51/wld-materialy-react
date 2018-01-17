import React from 'react'

const databaseUrl = 'https://ad-snadbox.firebaseio.com/JFDDL3/restToDo/waldek/'

class RestToDoList extends React.Component {
    state = {
        list: null,
        newTaskName: '',
        currentlyEditedTaskId: null,
        currentlyEditedTaskName: ''
    }

    componentWillMount() {
        this.getData()
    }

    getData() {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDb => this.setState({list: dataFromDb, /* newTaskName : '', */ currentlyEditedTaskName:'', currentlyEditedTaskId:null})) //nowy obiekt state ktory zostanie polaczony ze starym state

    }

    deleteTask = (taskId) => {
        fetch(
            databaseUrl + 'list/' + taskId + '/.json',
            {method: 'DELETE'}
        )
            .then(() => this.getData())
    }

    handleTaskNameClick(taskId, taskName) {
        this.setState({
            currentlyEditedTaskId: taskId,
            currentlyEditedTaskName: taskName
        })

    }

    handlerInputChange = (e) => this.setState({newTaskName: e.target.value})

    handleEditInputChange = (e) => this.setState({currentlyEditedTaskName: e.target.value})

    handlerButtonClick = () => {
        const newTaskObj = {name: this.state.newTaskName}

        fetch(databaseUrl + 'list/.json', {method: 'POST', body: JSON.stringify(newTaskObj)}) //headers:{} w FIREBASE nie musza byc
            .then(() => {
                console.log('POST OK');
                this.getData();
                this.setState({newTaskName: ''});
            }) // pobieramy dane ale w .then, bo musimy miec pewnosc, ze POST juz zakonczyl sie wykonywac; odswierza sie dlatego, ze zmieniamy state
            .catch((err) => console.log('POST ERR'))
    }

    handleSaveButtonClick = () => {
        const newTaskObj = {name: this.state.currentlyEditedTaskName}

        fetch(
            databaseUrl + 'list/'+ this.state.currentlyEditedTaskId +'/.json',
            {method: 'PATCH', body: JSON.stringify(newTaskObj)}
            )
            .then(() => this.getData())
            .catch((err) => console.log('PATCH ERR'))
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
                            <div key={key}>
                                <span onClick={() => this.handleTaskNameClick(key, val.name)}>
                                    {this.state.currentlyEditedTaskId === key ?
                                        <span>
                                        <input
                                            onChange={this.handleEditInputChange}
                                            value={this.state.currentlyEditedTaskName}
                                        />
                                            <button onClick={this.handleSaveButtonClick}>
                                                Save
                                            </button>
                                        </span>
                                        :
                                        val.name
                                    }
                                    </span>
                                <button
                                    onClick={() => this.deleteTask(key)} // funkcja wewnetrzna w anonimorej funkcji strzalkowej, zeby funckja wewnetrza wywolywala sie tylko na klikniecie
                                >
                                    Del
                                </button>
                            </div>
                        ))
                }
            </div> /*musimy przerobic obiek na tablice, bo React nie moze przyjmowac obiektow jako children*/
        )
    }
}

export default RestToDoList