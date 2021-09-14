import React from 'react'

function Sandbox({currentProject}) {

    return (
        <h1 style = {{color: "#3F51B5"}}>This is {currentProject.title}</h1>
    )
}

export default Sandbox;