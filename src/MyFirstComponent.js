import React from 'react'

// components are called with props objects that contain props
// we can put JS in JSX in {}
const MyFirstComponent = ({name, showName}) => (
    <div>
        <h2>Hello World { showName ? name : null }</h2>
    </div>
)

// function component should return JSX or null

export default MyFirstComponent