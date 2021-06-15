import React from 'react'

function LoadingSpinner() {
    let progressPercent = 100

    return (
        <div className='row'>
            <div className='col-sm-12'>        
                <div className="progress" style={{height: '20px'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: progressPercent + '%'}}>
                        Loading...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner