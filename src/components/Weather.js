import React from 'react'
import GenericCard from './GenericCard'
import CurrentWeatherCard from './CurrentWeatherCard'
import CardRow from './CardRow'

function Weather(props) {
    

    const sunRiseTime = new Date(props.weatherData.sys.sunrise * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const sunSetTime = new Date(props.weatherData.sys.sunset * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    

    const tempCardInfo = [
        {label: 'High',  text: props.weatherData.main.temp_max + ' F'},
        {label: 'Low',  text: props.weatherData.main.temp_min + ' F'}
    ]

    const windCardInfo = [
        {label: 'Speed',  text: props.weatherData.wind.speed + ' mph'},
        {label: 'Direction',  text: props.weatherData.wind.deg + ' degrees'}
    ] 
    
    const pressureCardInfo = [
        {label: 'Pressure',  text: props.weatherData.main.pressure + ' mbar'}
    ]     

    const sunCardInfo = [
        {label: 'Sunrise',  text: sunRiseTime},
        {label: 'Sunset',  text: sunSetTime},
    ]   

    return (
        <div>
            <div className='row'>
                <div className='col-sm-12'>
                    <h3>Current Weather for { props.weatherData.name }</h3>
                    <hr />
                </div>
            </div>  

            <CardRow className="mainWeatherCard">
                <CurrentWeatherCard weatherData={props.weatherData} /> 
            </CardRow>        

            <CardRow className="addWeatherCard">
                <GenericCard title='Temperature' lines={tempCardInfo} />                
                <GenericCard title='Wind' lines={windCardInfo} /> 
            </CardRow>
            
            <CardRow className="addWeatherCard">
                <GenericCard title='Pressure' lines={pressureCardInfo} />  
                <GenericCard title='Sun' lines={sunCardInfo} />                  
            </CardRow>
        </div>
    )
}

export default Weather