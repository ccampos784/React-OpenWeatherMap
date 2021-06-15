import React from 'react'

function weatherForm(props) {

    return (
        <form onSubmit={props.searchZipCode}>
            <div className="row">
            <div className="col-sm-12">
                <div className="form-group">
                <label htmlFor="zipCode"><h3>Enter your Zip Code</h3></label>

                <div className='form-group'>
                    <input type="text" 
                    name="zipCode" 
                    className="form-control" 
                    placeholder="Enter ZIP Code" 
                    value={props.zipCode}
                    onChange={props.handleZipCodeChange}/>

                    <div className='btn-group' style={{paddingTop: '10px'}}>
                        <button type="submit" className="btn btn-primary" >Search</button>
                        <button className='btn btn-secondary' onClick={props.getLocation}>Use location</button>
                    </div>
    
                </div>

                <small id="emailHelp" className="form-text text-muted">Powered by OpenWeatherMaps.</small>

                </div>
            </div>
            </div>
        </form>
    )
}

export default weatherForm