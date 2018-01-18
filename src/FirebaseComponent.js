import React from 'react'
import {database} from './firebase'  //import  naszego pliku

class FirebaseComponent extends React.Component {

    componentWillMount(){
       // const listDbRef = database.ref('/JFDDL3/restToDo/waldek/list')
       //  listDbRef.set({name:'waldek'}) //to samo co PUT ale zwraza promisy
       //  .then(()=> console.log('Saved to DB'))

        // const listDbRef = database.ref('/my/first/path')
        // listDbRef.set("it Works") //to samo co PUT ale zwraza promisy
        //     .then(()=> console.log('Saved to DB'))

        const listDbRef = database.ref('/myData')
        listDbRef.set({name: "waldek", surname: "fryc", age: 18}) //to samo co PUT ale zwraza promisy i nie trzeba JSONstringify()
            .then(()=> console.log('Saved to DB'))

    }

    render() {
        return (
            <div>Firebase</div>
        )
    }
}

export default FirebaseComponent