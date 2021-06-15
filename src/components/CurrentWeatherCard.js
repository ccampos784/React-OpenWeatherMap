import React from 'react';


function CurrentWeatherCard(props) {
    const currentConditions = props.weatherData.weather[0]

    return (
        <React.Fragment>
            <div className='col-sm-6 offset-md-3 text-center' style={{paddingBottom: '10px'}}>
                <img src={'http://openweathermap.org/img/wn/' + currentConditions.icon + '@4x.png'} alt={currentConditions.main}/>
                <div style={{fontSize: '6em'}}>{ Math.round(props.weatherData.main.temp) }&#176;</div>
            </div>            
            <div className='col-sm-6 text-center'>
                <h3>{ Math.round(props.weatherData.main.feels_like) }&#176;</h3>
                <h5>Feels Like</h5>               
            </div>
            <div className='col-sm-6 text-center'>
                <h3>{ Math.round(props.weatherData.main.humidity) }%</h3> 
                <h5>Humidity</h5>            
            </div>            
            {}
        </React.Fragment>        
    )
}



export default CurrentWeatherCard