import React from 'react'

import MyComponent from './MyComponent'
import Condition from './Condition'

const Concatenation = (props) => {
    return (
        <div>
            <MyComponent text={props.firstText}/>
            <Condition
                showText={props.showSecondText}
                text={props.secondText}
            />
        </div>
    )
}

export default Concatenation