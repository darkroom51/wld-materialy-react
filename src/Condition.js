import React from 'react'

const Condition = (props) => {
    return <div>
        {props.showText ? props.text  : null}
    </div>
}

export default Condition