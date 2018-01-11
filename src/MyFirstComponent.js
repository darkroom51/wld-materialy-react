import React from 'react'

// components are called with props objects that contain props
// we can put JS in JSX in {}
const MyFirstComponent = (props) => (
    <div>
        Hello World {props.name}!
    </div>
)

// function component should return JSX or null

export default MyFirstComponent