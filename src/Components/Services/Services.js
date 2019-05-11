import React from 'react'

export default function Services(props) {
    return(
        <div>Services
            <div>{props.match.params.id}</div>
        </div>
    )
}