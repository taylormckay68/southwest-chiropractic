import React from 'react'

export default function Services(props) {
    console.log(props.match.params.id)
    return(
        <div>Services
            <div>{props.match.params.id}</div>
        </div>
    )
}