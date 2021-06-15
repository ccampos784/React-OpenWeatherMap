import React from 'react'

function GenericCard(props) {

    return (
        <div className='col-sm-6'>
            <div>
                <h3>{props.title}</h3>

                {props.lines.map((line) => <h5 key={line.label}>{line.label}: {line.text}</h5>)} 
            </div>
        </div>

    )
}

export default GenericCard