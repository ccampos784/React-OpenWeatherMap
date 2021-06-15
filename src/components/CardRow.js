import React from 'react'


function CardRow(props) {
   
    return (
        <div className={'row '  + props.className}>
            {props.children}

            <div className="col-sm-12">
                <br/>
            </div>
        </div>
    )
}

export default CardRow